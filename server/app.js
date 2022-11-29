const express = require('express');

const app = express();

require('dotenv').config();

const port = 7000;

const mongoose = require("mongoose");
require("./db/conn")

const router = require("./routes/router");

const users = require('./models/userSchema');

const cors = require('cors');

app.use(cors());

app.use(express.json());


app.use(router);


app.listen(port,()=>{
    console.log(`server is running on port :${port}`)
})
