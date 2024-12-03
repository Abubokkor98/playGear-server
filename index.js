const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(express.json());
app.use(cors());


// mongodb
const uri = "mongodb+srv://abcocofficial:5mJ1tWInrI5vJs3X@cluster0.4nvaj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });


// function for mongodb
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.log(error);
    }
}
run();



app.get("/",(req,res)=>{
res.send('hello from server')
});

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})