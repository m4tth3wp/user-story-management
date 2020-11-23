const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
    title: String,
    description: String,
    status: String
})

let userSchema = new Schema({
    name: String,
    email: String,
    stories: [storySchema],
    googleId: String
})

module.exports = mongoose.model('User', userSchema);