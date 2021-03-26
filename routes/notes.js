const express = require('express');
const router = express.Router();
const Note = require('../models/note');


//Getting all
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
    /*
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
    */
});
//Getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id);
});

//Creating one
router.post('/', async (req, res) => {
    const note = new Note({
        title: req.body.title,
        text: req.body.text
    });
    try {
        const newNote = await note.save();
        res.status(201).json(newNote);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
    /*
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    });
    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscribewr);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
    */
});

//Updating one
router.patch('/:id', (req, res) => {

});

//Deleting one
router.delete('/:id', (req, res) => {

});


module.exports = router;