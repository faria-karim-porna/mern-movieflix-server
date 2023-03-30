const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qs1yz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect().then((res) => {
  const moviesCollection = client.db("movieflix").collection("movies");
  const bookingsCollection = client.db("movieflix").collection("bookings");

  app.post("/addAllData", (req, res) => {
    const allMovies = req.body;
    moviesCollection.insertMany(allMovies).then((result) => {
      console.log(result.insertedCount);
      res.send(result.insertedCount);
    });
  });

  app.get("/showMoviesInfo", (req, res) => {
    moviesCollection.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });

  app.post("/addBookings", (req, res) => {
    const newBooking = req.body;
    bookingsCollection.insertOne(newBooking).then((result) => {
      console.log(result);
    });
  });

  app.patch("/updateStatus", (req, res) => {
    moviesCollection
      .updateOne(
        { id: req.body.id, "seatsArrangement.sid": req.body.sid },
        {
          $set: { "seatsArrangement.$.status": req.body.status },
        }
      )
      .then((result) => {
        res.send(result.modifiedCount > 0);
      });
  });
});

app.listen(process.env.PORT || port);
