const {MongoClient,ObjectId} = require('mongodb')
const express = require('express')

const app = express();

console.log()
const uri = `mongodb+srv://antonykibet059:123Acosta@cluster0.eoos6vz.mongodb.net/Ecommerce?retryWrites=true&w=majority`

const client = new MongoClient(uri);


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

dbInit()

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