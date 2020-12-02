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

Technical task: The technical task wants to be closest as possible with the
company dataset and daily challenges for our team. For you we created a special
company: Dynamic prices is a company with history of fifteen years. The company
uses an aggressive strategy. Each night a special cron job changes the price of
each product variant. Each product has different variants: S, M, L, XL. The
company has more than million of orders. The stakeholder team wants to have a
best selling report for each product variant in the past 30 days, 90 days, 180
days and 365 days. The report must contains two import fileds:

- cashFlow. The field represents sum of prices
- sales. The fields represents how many orders are purchaised by this variant.

The output format must be in the JSON format. The example of the report can be
find below. You have access to dataset. Please execute the following command on
your local machine:

```
npm run download-dynamic-prices
```

The command "downloads" all orders in your local machine. Each row has the
following attributes:

- productId
- variant. The variants can be: S, M, L, XL.
- order meta data. The object contains the order date and the dynamic price.

Note: If you're not familiar with `jsonl` as a format please visit:
[https://jsonlines.org/examples](https://jsonlines.org/examples).

The final goal it's achievable if you "kill" three mystic creates.

#### Creature 1: The parser

You need to build a parser. The parser must extract and save these 10000000+
records in mongodb collection(s).

Hint: Each product id occurs multiple time in the report.

#### Creature 2: The aggregator

You need to build a cron job if you want to kill this creature. The cron job
accumulates product variant orders in the past 30 days, 90 days, 180 days and
365 days.

#### Creature 3: REST API Call

The stakeholder teams wants to know the best selling product variants in the
last 30 days, 90 days, 180 days and 365 days. The output format must be:

```
{
  "bestSellers": {
    "30days": {
      "S": {
        "productId": "???",
        "cashFlow": "...",
        "sales": "..."
      },
      "M": {
        "productId": "???",
        "cashFlow": "...",
        "sales": "..."
      },
      "L": {
        "productId": "???",
        "cashFlow": "...",
        "sales": "..."
      },
      "XL": {
        "productId": "???",
        "cashFlow": "...",
        "sales": "..."
      }
    },
    "90days": {
      "S": {
        "productId": "???",
        "cashFlow": "...",
        "sales": "..."
      },
      "M": {
        "productId": "???",
        "cashFlow": "...",
        "sales": "..."
      },
      "L": {
        "productId": "???",
        "cashFlow": "...",
        "sales": "..."
      },
      "XL": {
        "productId": "???",
        "cashFlow": "...",
        "sales": "..."
      }
    },
    "180days": {
      "S": {
        "productId": "???",
        "cashFlow": "...",
        "sales": "..."
      },
      "M": {
        "productId": "???",
        "cashFlow": "...",
        "sales": "..."
      },
      "L": {
        "productId": "???",
        "cashFlow": "...",
        "sales": "..."
      },
      "XL": {
        "productId": "???",
        "cashFlow": "...",
        "sales": "..."
      }
    },
    "365days": {
      "S": {
        "productId": "???",
        "cashFlow": "...",
        "sales": "..."
      },
      "M": {
        "productId": "???",
        "cashFlow": "...",
        "sales": "..."
      },
      "L": {
        "productId": "???",
        "cashFlow": "...",
        "sales": "..."
      },
      "XL": {
        "productId": "???",
        "cashFlow": "...",
        "sales": "..."
      }
    }
  }
}
```
