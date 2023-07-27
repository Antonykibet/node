const {MongoClient,ObjectId} = require('mongodb')
const express = require('express');
const { constant, result } = require('lodash');
const app = express();

const uri = `mongodb+srv://antonykibet059:123Acosta@cluster0.eoos6vz.mongodb.net/Ecommerce?retryWrites=true&w=majority`
const client = new MongoClient(uri);
const PORT = 3500;

app.get('/users',async(req,res)=>{
    const db = await client.db('Ecommerce')
    const Users = await db.collection('Users').find().toArray()
    res.send(Users)
})

app.listen(PORT,async()=>{
    await  client.connect()
})



async function dbInit(){
    try {
        await client.connect();
        const db = await client.db('Ecommerce');
        const Users = await db.collection('Users').find().toArray();
        console.log(Users);
        
    } catch (error) {
        console.log(error);
    }finally{
        client.close();
    }
}

//dbInit()

// async function connect(){
//     try{
//         await client.connect();
//         const database =  client.db('Ecommerce')
//         const collection = database.collection('Products');
//         const first = await collection.find(new ObjectId())
//         console.log(first);
//     }catch(err){
//         console.log(err)
//     }finally{
//         client.close();
//     }
// }

// connect();