import * as http from 'http';
import * as fs from 'fs';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile('./pages/index.html', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.write(data);
    res.end()
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
