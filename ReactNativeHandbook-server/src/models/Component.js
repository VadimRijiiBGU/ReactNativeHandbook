const mongoose = require('mongoose');

// const todoSchema = mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String
//     },
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     }
// });

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

const componentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    releaseDate: {
        type: Date
    },
    version: {
        type: Number
    },
    androidVersions: [androidSchema]
    // androidId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Android'
    // }
});

// mongoose.model('Todo', todoSchema);
mongoose.model('Component', componentSchema);
