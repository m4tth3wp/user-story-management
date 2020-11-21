const User = require('../models/user');
const Project = require('../models/project');

function getDashboard(req, res, next) {
    User.find({}, function(err, users) {
        console.log(req.user.name)
        let userLoggedIn = req.user.name
        res.render('admin-page', {
            title: 'Admin Page',
            users,
            userLoggedIn
        });
    });
}

module.exports = {
    getDashboard
}