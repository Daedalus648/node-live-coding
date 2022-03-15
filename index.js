const express = require("express");
const app = express();
const mongoose = require("mongoose");
const WilderModel = require("./models/Wilder");
const PORT = 3002;
const connect = require("./db/connect");
const wilderRouter = require("./controllers/WilderControllers");

var cors = require('cors');

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");

})
// Test a Wilder creation
/*
app.get("/createUser", async(req, res) => {
    const FirstWilder = new WilderModel({
        name: "First Wilder",
        city: "San Francisco",
        skills : [
            { title: "HTML", votes: 10},
            { title: "React", votes: 5},
        ],
    });

    try {
    await FirstWilder
    .save()
    res.send(FirstWilder)
    }
    catch(err){console.err(err);
    };
});
*/

// Middleware


app.use('/api/wilders', wilderRouter)

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));