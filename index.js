import * as http from 'http';
import * as fs from 'fs';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if (req.url == '/') {
    fs.readFile('./pages/index.html', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      res.end(data)
    })
  }
  else if (req.url == '/about') {
    const html = fs.readFileSync('./pages/about.html')
    res.end(html)
  }
  else if (req.url == '/contact-me') {
    const html = fs.readFileSync('./pages/contact-me.html')
    res.end(html)
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
