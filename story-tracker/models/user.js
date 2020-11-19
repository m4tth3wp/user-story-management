const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let userSchema = new Schema({
    name: String,
    email: String,
    projects: [{type: Schema.Types.ObjectId, ref: 'Project'}],
    googleId: String
})

module.exports = mongoose.model('User', userSchema);