const Project = require('../models/project');

function index(req, res) {
    Project.find({}, function(err, projects) {
        res.render('projects/index', {title: 'All Projects', projects });
    });
}

module.exports = {
    index,
    // show,
    // new: newProject,
    // create
}