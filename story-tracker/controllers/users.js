const User = require('../models/user');
const Project = require('../models/project');

function getDashboard(req, res, next) {
    User.find({}, function(err, users) {
        res.render('admin-page', {
            title: 'Admin Page',
            users
        });
    });
}

module.exports = {
    getDashboard
}