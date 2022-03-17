// Wilder.js
import { Model, Document, Schema, model } from "mongoose";

const wilderSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 30
    },
    city: String,
    skills: [{
        label: String,
        votes: Number
    }],
    completed: {
        type: String,
        enum: ['in progress', 'failed', 'congrats'],
        default: 'in progress'
    }
})

interface IWilder extends Document {
    name: String;
    city: String;
    completed: String;
    skills: [
        label: String,
        votes: Number
    ]
}


export { IWilder };
const wilder: Model<IWilder> = model('Wilder', wilderSchema);
export { wilder };
/*
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WilderSchema = new Schema({
    name: String,
    city: String,
    skills: [{ title: String, votes: Number }],
});

module.exports = mongoose.model("Wilders", WilderSchema);
*/