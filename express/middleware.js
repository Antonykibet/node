const express = require('express');
const app =express();

function logger(req){
    console.log(req.url)
}
app.get('/',(req,res)=>{
    logger(req);
    res.send('Home')
})
app.get('/about',(req,res)=>{
    logger();
    res.send('Home')
})
app.listen(3000,()=>'SERVER IS LISTENING AT PORT 3000...')