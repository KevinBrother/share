const http = require('http');

const port = 3001;
let a = 1;
console.log(a)
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  console.log(a)
  res.end(`Hello, World111 ${a++} ! ${port}`);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
