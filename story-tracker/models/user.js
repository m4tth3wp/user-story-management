const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Open', 'In-progress', 'Completed', 'Deployed', 'UAT'],
        required: true

    }
})

let userSchema = new Schema({
    name: String,
    email: String,
    stories: [storySchema],
    googleId: String
})

module.exports = mongoose.model('User', userSchema);