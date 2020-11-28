const DB = `mongodb+srv://reizha77:reizha121@cluster0.wheem.mongodb.net/test?retryWrites=true&w=majority`;
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const postsRouter = require("./Api/posts.js");
// app.use(cors());
app.use(bodyParser.json());



mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("mongo db is connecting")
    })
    .catch((err) => {
        console.log(`there was an error ${err}`)
    })

app.use("/", postsRouter);
app.use("/post", postsRouter);
app.use("/login", postsRouter);





app.listen(port, () => {
    console.log(`server is running in ${port}`)
})