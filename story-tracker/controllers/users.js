const User = require('../models/user');
const Story = require('../models/story');

function getDashboard(req, res, next) {
    User.findById(req.user._id)
    .populate('Story').exec(function(err, user) {
        let userLoggedIn = req.user.name
        let stories = req.user.stories
        console.log(user.stories)
        console.log('******stories:*****', stories)
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