const Project = require('../models/project');
const User = require('../models/user');

function index(req, res) {
    User.findById(req.user._id, function(err, user) {
        let projectList = user.projects
        res.render('projects/index', {
            title: 'All Projects',
            user,
            projectList
        })
    })
}


function create(req, res) {
    User.findById(req.user._id, function(err, user) {
        const project = new Project(req.body);
        user.projects.push(project)
        user.save()
        console.log(project)
        console.log(req.user.projects)
        res.redirect('projects');
    }
    )}

function show(req, res) {
    User.findById(req.user._id, function(err, userData) {
        let userId = req.user._id
        let projectId = req.params.id
        User.find({ "_id" : userId },
        { projects: { $elemMatch: { _id: projectId } } }, function(err, projectData) {
            let projectId = req.params.id
            console.log('data from user model', userData)
            console.log('project data', projectData)
            res.render('projects/show', {
                projectData,
                userData,
                projectId
            })
        })
    })
}

function newProject(req, res) {
    res.render('projects/new', { title: 'Add Project' });
}

module.exports = {
    index,
    new: newProject,
    show,
    create
}