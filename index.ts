export {};
import { SendHandle } from "child_process";
import { connect } from "./db/connect";

connect();
const express: any = require("express");
const app: any = express();
/*
const mongoose = require("mongoose");
const WilderModel = require("./models/Wilder");
const connect = require("./db/connect");
*/
const PORT: Number = 3002;
const wilderRouter: String = require("./controllers/WilderControllers");

var cors: any = require('cors');

app.use(cors());

app.get("/", (req: Request, res: any) => {
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


app.use('/api/wilders', wilderRouter);

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));