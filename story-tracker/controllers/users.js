const User = require('../models/user');

function getDashboard(req, res, next) {
    res.render('admin-page');
}

module.exports = {
    getDashboard
}