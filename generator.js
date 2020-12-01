const fs = require('fs')
let writeStream = fs.createWriteStream('example.jsonl')

const totalRecords = 1200000
const rounds = 10000
const records = totalRecords / rounds

for (let j = 0; j < rounds; j++) {
  let i = 0
  while (i < records) {
    i++
    const object = {
      productId: i,
      orders: randomNumber(),
      orderDate: randomDate(new Date(2005, 0, 1), new Date()),
      reviews: randomNumber(),
      reviewDate: randomDate(new Date(2005, 0, 1), new Date()),
      wishes: randomNumber(),
      wishDate: randomDate(new Date(2005, 0, 1), new Date()),
    }

    const newLine = `\n`
    writeStream.write(`${JSON.stringify(object)}${newLine}`)
  }
}

writeStream.on('finish', () => {
  console.log('wrote all data to file')
})

writeStream.end()

function randomNumber() {
  const number = Math.floor(Math.random() * records + 1)

  return number
}

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  )
}
