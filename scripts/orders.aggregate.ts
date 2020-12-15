import * as fs from 'fs';
import { model as Order } from './db/order';
import CronJob from 'node-cron';
import * as mongodb from './db/mongodb';
import dotenv from 'dotenv';

interface Aggregated {
  variant: string;
  sales: number;
  cashFlow: number;
  productId: number;
}

interface Prettified {
  [key: string]: {
    sales: number;
    cashFlow: number;
    productId: number;
  }
}

const last = (days: number) => {
  const date = new Date(new Date().getTime() - 1000*3600*24*days);

  return Order.aggregate([
    { $match: { 'order.orderDate': { $gt: date } } },
    { $group: {
      _id: {
        variant: '$variant',
        productId: '$productId'
      },
      cashFlow: { $sum: '$order.price' },
      sales: { $sum: 1 }
    }},
    { $sort: { cashFlow: -1 } },
    { $group: {
      _id: '$_id.variant',
      cashFlow: { $first: '$cashFlow' },
      sales: { $first: '$sales' },
      productId: { $first: '$_id.productId' }
    }},
    { $project: {
      _id: 0,
      variant: '$_id',
      cashFlow: 1,
      sales: 1,
      productId: 1
    }},
    { $sort: { cashFlow: -1 } },
  ]).exec();
};

const prettify = (aggregated: Aggregated[]) => {
  const result: Prettified = {};
  aggregated.forEach(({ variant, ...item}) => {
    result[variant] = item;
  });

  return result;
}

const aggregate = async () => {
  return {
    '30days': prettify(await last(30)),
    '90days': prettify(await last(90)),
    '180days': prettify(await last(180)),
    '365days': prettify(await last(365)),
  }
}


const job = CronJob.schedule('0 */5 * * * *', async () => {
  try {
    const fileContent = {
      bestSellers: await aggregate()
    };
    fs.writeFileSync('best-sellers.json', JSON.stringify(fileContent));
    console.log('best-sellers.json successfully updated at', new Date().toISOString());
  } catch (e) {
    console.error('something went wrong');
    console.error(e);
  }
});

(async () => {
  try {
    await mongodb.connect();
    job.start();
  } catch {
    process.exit(1);
  }
})();

