const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const CONNECTION_URL = 'mongodb://127.0.0.1:27017';
const DATABASE_NAME = 'task';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let db,coll1,coll2,coll3;
app.listen(2000,  () => {
    const client = new MongoClient(CONNECTION_URL)
    
    client.connect();
        db = client.db(DATABASE_NAME);
        coll1 = db.collection('data');
        coll2=db.collection('jobapplication')
        coll3=db.collection('interview')
       
        console.log('Connected to ' + DATABASE_NAME);
});
app.post('/data',async(request,response)=>
{
    const res1=await coll1.insertOne(request.body);
    response.send(res1)
})
app.get('/data',async(request,response)=>
{
    const res1=await coll1.find({}).toArray();
    response.send(res1)
})
app.post('/application',async(request,response)=>
{
    const res2=await coll2.insertOne(request.body)
    response.send(res2)
})
app.get('/application',async(request,response)=>

{
    const res2=await coll2.find({}).toArray()
    response.send(res2)
})
app.post('/interview',async(request,response)=>
{
    const res3=await coll3.insertOne(request.body)
    response.send(res3)
})
app.get('/interview',async(request,response)=>

{
    const res3=await coll3.find({}).toArray()
    response.send(res3)
})