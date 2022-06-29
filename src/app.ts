import dotenv from "dotenv";
import { router } from "./api/router";

import cors from "cors";
import express from "express";
import { Data } from "./config";

dotenv.config();
const app = express();

app.use(express.json({ limit: "50mb" }));

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(express.json());

const PORT = Data.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Mess management!");
});
app.use(
  "/api",
  (req, res, next) => {
    console.log(req.url);
    next();
  },
  router
);

app.listen(() => {});
app.listen(PORT, () => {
  return console.log(`App is listening at http://localhost:${PORT}`);
});
