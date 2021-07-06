const express = require("express");

const app = express();
const cors = require("cors");
const fetch = require("node-fetch")

let signUp = require("./signUp")
let logIn = require("./logIn")

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json())

app.use("/signUp", signUp)
app.use("/logIn", logIn)

app.listen(process.env.PORT || 3001);