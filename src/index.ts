import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import http from "http";
import mongoose from "mongoose";
import router from "./routes/router";
const app: Express = express();
const server = http.createServer(app);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", router);
app.set("PORT", 3000);
app.set("BASE_URL", "Local host");
dotenv.config();

const mongoose_url: String = "mongodb://localhost:27017/";
console.log(mongoose_url);

if (!mongoose_url) {
  console.error("mongoose url not find ");
  process.exit(1);
} else {
  mongoose
    .connect("mongodb://localhost:27017")
    .then(() => {
      console.log("Mongo db connect successfully");
    })
    .catch((error) => console.log(error));
}

try {
  const port: Number = app.get("PORT");
  const baseurl: String = app.get("Base_URL");
  app.listen(port, (): void => {
    console.log("server listening ");
  });
} catch (error) {
  console.log(error);
}
export default server;
