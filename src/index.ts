import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes";
// import MongoClient from "mongodb".MongoClient;

dotenv.config();

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qs1yz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-shard-00-00.qs1yz.mongodb.net:27017,cluster0-shard-00-01.qs1yz.mongodb.net:27017,cluster0-shard-00-02.qs1yz.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-6yqhwu-shard-0&authSource=admin&retryWrites=true&w=majority`;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(router)

const port = 5000;

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

const options = { useNewUrlParser: true, useUnifiedTopology: true };
// mongoose.set("useFindAndModify", false);
mongoose
  .connect(uri)
  .then(() => console.log("connected"))
  .catch((error: any) => {
    throw error;
  });

app.listen(process.env.PORT || port);
