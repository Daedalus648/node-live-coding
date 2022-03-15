const {Router} = require('express');
const express = require('express');
const asyncHandler = require('express-async-handler')

const Wilder = require('../models/Wilder')

const router = Router();

// REST API
// const routes = ['GET /api/wilders', 'GET /api/wilders/:id', 'POST /api/wilders', 'UPDATE /api/wilders/:id', 'DELETE /api/wilders/:id']
router.use(express.json())

function runAsyncWrapper(callback){
    return function(req, res, next){
        callback(req, res, next).catch(next);
    };
}

router.route('')
.get(asyncHandler(async (req, res, next) => {
    async function runAsync(){
        const wilders = await Wilder.find({}).exec()
        res.status(200).send(wilders)
    }
    runAsync().catch(next);
}))

.post(asyncHandler(async (req, res, next) => {
    async function runAsync(){
    if(!req.body.skills){
        return next(new Error('No skills added! Please change.'))
    }
    const wilder = await Wilder.create(req.body)
    res.status(201).send(wilder)
}
    runAsync();
}))

router.route('/:id')
.put(asyncHandler(async(req, res, next) => {
    async function runAsync(){
        const id = req.params.id

        // 1 does the user exist?

        // 2 do we have a valid payload?
    const updated = await Wilder.findByIdAndUpdate({ _id: id }, { name: req.body.name }, { new: true });
    return res.send(updated)
    }
    runAsync().catch(next);
}))

.delete(asyncHandler(async(req, res, next) => {
    async function runAsync(){
    const deleted = await Wilder.deleteOne({name: req.body.name}).exec();
    res.send(deleted);
}
    runAsync().catch(next);
}))


module.exports = router
/*
const WilderModel = require("../models/Wilder");

module.exports = {
    create: async (req, res) => {
        try {
        await WilderModel.init();
          const wilder = new WilderModel(req.body);
          const result = await wilder.save();
              res.json({ success: true, result: result });
            }
            catch(err) {
              res.json({ success: false, result: err });
            };
        },

    read: (req, res) => {
        WilderModel.find({ name: req.body.name })
        .then(() => 
        {
            if (!wilder) res.json({ success: false, result: err})
            res.json({ success: true, result: result})
        })
        .catch((err) => {
            res.json({ success: false, result: err })
        })
    },

    update: (req, res) => {
        WilderModel.updateOne(req.body)
        .then(wilder => {
            if (!wilder) res.json({ success: false, result: "No such person."})
            res.json(wilder);
        })
        .catch((err) => {
            res.json({ success: false, result: err})
        })
    },

    delete: (req, res) => {
        WilderModel.deleteOne ({ name: req.body.name })
        .then(wilder => {
            if(!wilder) res.json({ success: false, result: "No person with such ID was found."})
            res.json({ success: true, result: result });
        })
        .catch((err) => {
            res.json ({ success: false, result: err })
        }
        )}
}

*/