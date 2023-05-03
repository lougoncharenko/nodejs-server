const http = require('http');
const server= http.createServer((req,res)=>{
 console.log('request made');
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 res.end('Hello World');
});
const port = 3000;

server.listen(port, 'localhost', ()=>{
  console.log(`Server running on port: ${port}`)
});


