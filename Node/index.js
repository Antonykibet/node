const http = require('http');

const Server = http.createServer((req,res)=>{
    if(req.url=='/home'){
        res.end('Karibu')
    }else{
        res.end(req.url)
    }
})
Server.listen(5000,()=>console.log('Server listening at port 5000'))