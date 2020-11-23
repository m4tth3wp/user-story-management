const User = require('../models/user');

function getDashboard(req, res, next) {
    User.findById(req.user._id, function(err, user) {
        let userLoggedIn = req.user.name
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