const express = require('express');
const app =express();
const users = require('./data')

app.use(express.static('./express'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

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


app.post('/action',(req,res)=>{
    const {fname} = req.body;
    fname=='Antony'? res.status(200).send(`Accept:${fname}`): res.status(404 ).send('Decline');
    // res.send(fname)
    console.log(fname);
})

app.get('/frontend/:jina',(req, res)=>{
    res.json(admin);
    console.log(req.params)
})

app.post('/frontend',(req, res)=>{
    let body =req.body;
    res.json(body);
    console.log(req.body);
})

app.put('/change/:id',(req,res)=>{
    const {id} = req.params;
    const {name} = req.query;

    

    let failed=()=>{
        res.status(404).send('Haiwezi bro')
    }
    let succesfull=()=>{
        const person = admin.find((person)=>person.id==Number(id));
        person.name=req.body.name;
        res.status(200).json(admin);
        console.log(admin);
    }
    (name=='antony')?succesfull():failed();
 
})


app.listen(3500, ()=>console.log('Server is listening at port 3500...'))