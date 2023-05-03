const http = require('http');
const fs = require('fs');

const server= http.createServer((req,res)=>{
 res.statusCode = 200;
 //set header content type
 res.setHeader('Content-Type', 'text/plain');

 let path = './views/';
 switch (req.url){
  case '/':
    path += 'index.html';
    break;
  case '/about':
    path += 'about.html';
    break;
 }

 fs.readFile(path, (err, data)=>{
  if (err) {
    console.log(err)
   } else {
    res.end(data);
   }
 });
});
const port = 3000;

server.listen(port, 'localhost', ()=>{
  console.log(`Server running on port: ${port}`)
});


