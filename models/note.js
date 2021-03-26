const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: 'title'
    },
    text: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Note', noteSchema);