const express = require("express");
const alien = require("../models/alien");
const router = express.Router();
const Alien = require("../models/alien");

//Get all Aliens
router.get("/", async(req, res) => {
    try {
        const aliens = await Alien.find();
        res.json(aliens);
    } catch (err) {
        res.send("Error " + err);
    }
});

//Get alien according to ID
router.get("/:id", async(req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    } catch (err) {
        res.send("Error " + err);
    }
});

//Post an Alien
router.post("/", async(req, res) => {
    //Send data for POST
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        isMarvelFan: req.body.isMarvelFan,
    });

    try {
        const newAlien = await alien.save();
        res.json(newAlien);
    } catch (err) {
        res.send("Error" + err);
    }
});

//Update an Alien
router.patch("/:id", async(req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        debugger;
        if (req.body.name) alien.name = req.body.name;
        else if (req.body.tech) alien.tech = req.body.tech;
        else if (req.body.isMarvelFan) alien.isMarvelFan = req.body.isMarvelFan;

        const updatedAlien = await alien.save();
        res.json(updatedAlien);
    } catch (err) {
        res.send("Error" + err);
    }
});

//Delete an alien
router.delete("/:id", async(req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        const deletedAlien = await alien.remove();
        res.json(deletedAlien);
    } catch (err) {
        res.send("Error " + err);
    }
});
module.exports = router;