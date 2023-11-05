const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");

var cors = require("cors");
const app = express();
const port = 3002;

app.use(cors());
app.use(express.static("public"));

const uri =
  "mongodb+srv://new-user-2:njimkobhu@cluster0.nctrqls.mongodb.net/?retryWrites=true&w=majority"; // replace with your MongoDB connection string
const dbName = "Cricket";
const collectionName = "news";

app.get("/api/getData2", async (req, res) => {
  let client;

  try {
    client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.find({}).toArray();

    // console.log(result);

    return res.status(200).json(result);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
