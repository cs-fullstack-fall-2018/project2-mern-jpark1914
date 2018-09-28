const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const blogModel = new Schema({
    username: {
        type: String,
    },
    title: {
        type: String,
    },
    journalEntry: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('blog', blogModel);