let express = require('express');
let app = express();
let port = 9500;
let mongo =require('mongodb');
let MongoClient = mongo.MongoClient;
const mongoUrl = "mongodb://localhost:27017";
// const client = new MongoClient(mongoUrl)
let db;


// async function getData()
// {
//     let result = await client.connect();
//     let db=result.db('leela');
//     let collection=db.collection('akshay');
//     let response=await collection.find({}).toArray()
//     console.log(response);
// }

// getData();

app.get('/a',(req, res) => {                      // "/" is used for default routes
    res.send('<h1>Welcome! to chennai express</h1>')
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    })
})
app.get('/heaven',(req, res)=>{
    res.send('<h2>welcome</h2>')
})

// app.get('/categories',(req, res) => {
//     db('leela').find().toArray((err,result) => {
//         if(err) throw err;
//         res.send(result)
//     })
// })

// ///// Connect with mongodb
MongoClient.connect(mongoUrl,{useNewUrlParser:true},(err,client)=>{
    err ? console.log('Error while connecting') : db=client.db('sepintern')
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    })
})