const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.get("/", (req, res) => res.send("Node API OK"));
app.listen(5000);
