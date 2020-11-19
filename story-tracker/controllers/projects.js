const Project = require('../models/project');

function index(req, res) {
    Project.find({}, function(err, projects) {
        res.render('projects/index', {title: 'All Projects', projects });
    });
}

function create(req, res) {
    const project = new Project(req.body);
    project.user = req.user._id;
    project.save(function(err) {
        if (err) return res.redirect('/projects/index');
        console.log(project)
        res.redirect('/projects');
    });
}

function newProject(req, res) {
    res.render('projects/new', { title: 'Add Project' });
}

module.exports = {
    index,
    new: newProject,
    create
}