const express = require('express');
const router = express.Router();
const Model = require('../model/model');


// post endpoint
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        stack: req.body.stack,
        interest: req.body.interest
    })

    try {
        const saveData = await data.save();
        res.status(200).json(saveData);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

//Get all endpoint
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

//Get by ID endpoint
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

//Update by ID endpoint
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
    
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Delete by ID endpoint
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.send(`Entry with ${data.name} deleted`);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
})




















module.exports = router;