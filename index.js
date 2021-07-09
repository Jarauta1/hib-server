const express = require("express");

const app = express();
const cors = require("cors");

let signUp = require("./signUp")
let logIn = require("./logIn")
let users = require("./users")

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json())

app.use("/signUp", signUp)
app.use("/logIn", logIn)
app.use("/users", users)

app.listen(process.env.PORT || 3001);