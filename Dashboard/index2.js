// const { MongoClient } = require("mongodb");
// const express = require("express");
// const app = express();
// const port = 3000;

// const uri =
//   "mongodb+srv://new-user-2:njimkobhu@cluster0.nctrqls.mongodb.net/?retryWrites=true&w=majority"; // replace with your MongoDB connection string

// const dbName = "Cricket";

// const collectionName = "Scores";

// async function getData() {
//   try {
//     const client = await MongoClient.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("Connected to MongoDB");

//     const db = client.db(dbName);

//     const collection = db.collection(collectionName);

//     const result = await collection.find({}).toArray();

//     console.log("Documents retrieved:", result);
//   } catch (err) {
//     console.error("Error:", err);
//   } finally {
//     client.close();
//   }
// }

// getData();

const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");

var cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.static("public"));

const uri =
  "mongodb+srv://new-user-2:njimkobhu@cluster0.nctrqls.mongodb.net/?retryWrites=true&w=majority"; // replace with your MongoDB connection string
const dbName = "Cricket";
const collectionName = "upcoming";

app.get("/api/getData1", async (req, res) => {
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
