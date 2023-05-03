const http = require('http');
const fs = require('fs');

const server= http.createServer((req,res)=>{
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 fs.readFile('./views/index.html', (err, data)=>{
  if (err) {
    console.log(err)
   } else {
    res.write(data);
    res.end();
   }
 });
});
const port = 3000;

server.listen(port, 'localhost', ()=>{
  console.log(`Server running on port: ${port}`)
});


