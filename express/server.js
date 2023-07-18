const express = require('express');
const app =express();
const users = require('./data')

const {ordinaryUsers, admin} = users;

// app.get('*', (req,res)=>{
//     res.send('Page not found...')
// })
// app.get('/staff/:staffName',(req,res)=>{
//     console.log(req.params.staffName);
//     res.send(users.find((user)=>user.name.toLowerCase()==req.params.staffName));
// })

// app.get('/query',(req,res)=>{
//     //http://localhost:3500/query?limit=3
//     const {a, limit} = req.query;
//     let sortedUsers=ordinaryUsers;
//     if(limit){
//         sortedUsers=sortedUsers.slice(0, Number(limit));
//         res.send(sortedUsers);
//         return
//     }
//     if(a){
//         sortedUsers.filter()
//         res.send(sortedUsers);
//         return
//     }

//     res.send(sortedUsers)
// })

app.use(express.static('./express'));
app.use(express.urlencoded({extended:false}));

app.post('/action',(req,res)=>{
    const {fname} = req.body;
    fname=='Antony'? res.status(200).send('accept'): res.status(404 ).send('Decline');
    console.log(fname);
})

app.post('/frontend',(req, res)=>{
    res.end('Imefika!!');
})




app.listen(3500, ()=>console.log('Server is listening at port 3500...'))