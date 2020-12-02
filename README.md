# Elephantstock.com

### About us:

Our brand, elephantstock.com, is a high traffic ecommerce platform for wall art
and print on demand. We offer a wide range of artworks from artists and stock
photos, and we are proud to receive excellent user reviews. Our factory is
located in Texas, HQ are in Tel Aviv, but most of the team works remotely, from
all over the Globe. We are a tech-savvy company, and we manage our entire
operation in proprietary back office applications. Our ERP includes order and
partner management systems, customer service tools, factory management systems,
product and catalog management systems, analytics tools, CMS, CRM and more.

### The technical task:

We want to test how you work with large dataset and your skills to parser large
files. The starting point of your journey is: `example.jsonl`. The file has
12000000 records. Each line has: `productId`, `orders`. Each order contains
details about the purchase date and product price.

Please generate the file with the following command:

```
npm run generator
```

If you're not familiar with `jsonl` as a format please visit:
https://jsonlines.org/examples.

#### Task 1

We want to give you three tasks. The first task has the code name: `The parser`.
Please create a parser and save these 12000000 records in mongodb collection(s).

#### Task 2

The second task is: The aggregator. Please create a cronjob. The cronjob must
calculate the orders for each product in the last 7 days, in the last 30 days,
in the last 90 days and from the beginning.

#### Task 3

The final requirement is a Rest Api endpoint. We want to know the top
performers. Please share the top products in the last 30 days, the last 90 days
and the last 365 days.
