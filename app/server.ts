import * as fs from 'fs';
import http from 'http';
import dotenv from 'dotenv';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  try {
    const readStream = fs.createReadStream('best-sellers.json');
    readStream.pipe(res);
  } catch {
    res.end('error while reading a file');
  }
})

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
