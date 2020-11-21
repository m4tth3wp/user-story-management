const Project = require('../models/project');
const User = require('../models/user');

function index(req, res) {
    Project.find({}, function(err, projects) {
        res.render('projects/index', {
            title: 'All Projects',
            projects
        });
    });
}

// function create(req, res) {
//     const project = new Project(req.body);
//     project.user = req.user._id;
//     project.save(function(err) {
//         if (err) return res.redirect('/projects/index');
//         console.log(project)
//         res.redirect('/projects');
//     });
// }

// function create(req, res) {
//     User.findById(req.user._id, function(err, user) {
//         const project = new Project(req.body);
//         usersProject = req.user.projects
//         usersProject.push(project)
//         user.save().then(function(user) {
//             console.log(user.projects)
//         })
//             res.redirect('/projects');
//         })
//     }

function create(req, res) {
    User.findById(req.user._id).populate('projects')
    .exec(function(err, user) {
        const project = new Project(req.body);
        user.projects.push(project)
        user.save()
        console.log(project)
        console.log(req.user.projects)
    })
    res.redirect('/projects');
    }

function show(req, res) {
    Project.findById(req.params.id, function(err, project) {
        User.findById(req.user._id, function(err, users) {
            console.log(users)
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