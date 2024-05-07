const express = require("express");
const app = express();
const connection = require("./model/db");
const userRouter = require("./router/userRouter");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();

// Middleware to receive json
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "client/dist")));
app.use("/", userRouter);

// app.get("/", (req, res) => {
//   return res.json("Welcome here!");
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

const PORT = process.env.PORT || 3566;

const start = async () => {
  try {
    await connection();
    app.listen(PORT, () => {
      console.log("Server is connected on 3566");
    });
  } catch (error) {
    console.error(error);
  }
};

start();
