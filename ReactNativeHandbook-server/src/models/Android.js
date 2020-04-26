const mongoose = require('mongoose');

const androidSchema = new mongoose.Schema({
    version: {
        type: Number,
        required: true
    },
    name: {
        type: String
    },
    releaseDate: {
        type: Date,
        required: true
    }
});

mongoose.model('Android', androidSchema);
