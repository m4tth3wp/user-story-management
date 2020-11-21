const Project = require('../models/project');
const User = require('../models/user');

// function index(req, res) {
//     Project.find({}, function(err, projects) {
//         res.render('projects/index', {
//             title: 'All Projects',
//             projects
//         });
//     });
// }
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
    Project.findById(req.params.id, function(err, project) {
        User.findById(req.user._id, function(err, users) {
            console.log(users.project)
            res.render('projects/show', {
                project,
                users
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