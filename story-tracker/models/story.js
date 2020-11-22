const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true
    } 
})

module.exports = mongoose.model('Story', storySchema);