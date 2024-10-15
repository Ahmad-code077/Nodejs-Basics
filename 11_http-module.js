const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello from my home page');
  }
  if (req.url === '/about') {
    res.end('Hello from my about page');
  }
  res.end(`
   <h1>Opss</h1>
   <p>Page not found</p>
   <a href='/'>Back home</a>
   `);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
