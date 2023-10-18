const http = require('http');

const port = 3002;
let b = 1;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log('b.js', b);
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello, b World!  ${b++} ==== ${port}`);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
