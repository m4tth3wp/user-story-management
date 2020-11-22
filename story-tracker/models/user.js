const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let userSchema = new Schema({
    name: String,
    email: String,
    stories: [{type: Schema.Types.Mixed, ref: 'Story'}],
    googleId: String
})

module.exports = mongoose.model('User', userSchema);