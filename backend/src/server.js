require("dotenv").config();

const connectToDatabse = require("./database")
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./routes");

connectToDatabse();

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log(`🚀 Backend started at http://localhost:${port}`)
});