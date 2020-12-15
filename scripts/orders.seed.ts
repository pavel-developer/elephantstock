import * as jsonl from 'node-jsonl';
import { model as Order } from './db/order';
import * as mongodb from './db/mongodb';
import dotenv from 'dotenv';

(async () => {
  await mongodb.connect();

  const lines = process.env.LINES || 1000;

  const rl = jsonl.readlinesChunk<typeof Order>('./example.jsonl', +lines);

  while (true) {
    const {value, done} = await rl.next()
    if (done) break;

    await Order.insertMany(value);
  }

  process.exit(0);
})()
