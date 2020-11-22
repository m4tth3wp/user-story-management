const User = require('../models/user');
const Project = require('../models/project');

function getDashboard(req, res, next) {
    User.findById(req.user._id)
    .populate('Project').exec(function(err, user) {
        let userLoggedIn = req.user.name
        let projects = req.user.projects
        console.log(user.projects)
        console.log('******projects:*****', projects)
        res.render('admin-page', {
            title: 'Admin Page',
            userLoggedIn,
            user
    })
})
}

module.exports = {
    getDashboard
}