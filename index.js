require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4nvaj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// function for mongodb
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const equipmentCollection = client.db("A10-DB").collection("euipments");

    // get all equipments
    app.get("/equipments", async (req, res) => {
      const cursor = equipmentCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // get featured equipment
    app.get("/equipments/featured", async (req, res) => {
      const cursor = equipmentCollection.find().limit(8);
      const result = await cursor.toArray();
      res.send(result);
    });

    // get category wise data
    app.get("/equipments/categories", async (req, res) => {
      const category = req.query.category;
      const result = await equipmentCollection
        .find({ category: category })
        .toArray();
      res.send(result);
    });

    // get only user uploaded equipment
    app.get("/equipments/user", async (req, res) => {
      const email = req.query.email;
      const result = await equipmentCollection.find({ email: email }).toArray();
      res.send(result);
    });

    // get an equipment for update
    app.get("/equipments/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await equipmentCollection.findOne(query);
      res.send(result);
    });

    // update a coffe
    app.put("/equipments/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedEquipment = req.body;
      const equipment = {
        $set: {
          image: updatedEquipment.image,
          itemName: updatedEquipment.itemName,
          category: updatedEquipment.category,
          description: updatedEquipment.description,
          price: updatedEquipment.price,
          rating: updatedEquipment.rating,
          customization: updatedEquipment.customization,
          processingTime: updatedEquipment.processingTime,
          stockStatus: updatedEquipment.stockStatus,
        },
      };
      const result = await equipmentCollection.updateOne(
        filter,
        equipment,
        options
      );
      res.send(result);
    });

    // post euipment
    app.post("/equipments", async (req, res) => {
      const newEquipment = req.body;
      const result = await equipmentCollection.insertOne(newEquipment);
      res.send(result);
    });

    // delete equipment
    app.delete("/equipments/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await equipmentCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log(error);
  }
}
run();

app.get("/", (req, res) => {
  res.send("Assignment-10 server is running");
});

app.listen(port, () => {
  console.log(`Assignment-10 Server is running on port: ${port}`);
});
