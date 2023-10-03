require("dotenv").config();

const express = require("express");

const routes = require("./routes");
const connectToDatabse = require("./database")
const cors = require("cors");

connectToDatabse();

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log(`🚀 Backend started at http://localhost:${port}`)
});