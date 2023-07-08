const { Console } = require('console');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3500
const server =http.createServer((req,res)=>{
    console.log(req.url, req.method);

    if(req.url=='/' || req.url == 'app.html'){
        fs.readFile(path.join(__dirname,'app.html'), (err, data)=>{
            res.end(data)
        })
    }else if(req.url == '/app.css'){
        fs.readFile(path.join(__dirname,'app.css'), (err, data)=>{
            res.writeHead(200, {"content-Type" : 'text/css'})
            res.end(data)
        })
    }
})

server.listen(PORT, ()=>console.log(`Server listening at port: ${PORT}`))