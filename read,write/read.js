const fs = require('fs');

fs.readFile('./read,write/hello.txt', 'utf-8', (err,data)=>{
    if(err) console.log('failed');
    
    console.log(data)
})

fs.writeFile('./read,write/write.txt',"Am good,,,",(err)=>{
    console.log('write succesfull')
})
// there's alse fs.append()
console.log("hello nodemon")
