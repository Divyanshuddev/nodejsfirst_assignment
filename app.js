const http = require('node:http');

const server = http.createServer((req,res)=>{
    res.writeHead(200);
    res.end("Hello world");
});

server.listen(4000,()=>{
    console.log("Your Server is running => http://localhost:4000/")
})