const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storiesSchema = new Schema({
    storyName: {
        type: String,
        required: true
    },
    storyDescription: {
        type: String,
        required: true
    },
    storyStatus: {
        type: Number,
        min: 1,
        max: 4,
        default: 1,
        required: true
    }
})

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    stories: [storiesSchema]
})

module.exports = mongoose.model('Project', projectSchema);