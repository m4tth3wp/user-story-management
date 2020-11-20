const Project = require('../models/project');

function create(req, res) {
    Project.findById(req.params.id, function(err, project) {
      project.stories.push(req.body);
      project.save(function(err) {
        res.redirect(`/projects/${project._id}`);
      });
    });
  }

function updatePage(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    Project.findOne({'stories._id': req.params.id}, function(err, project) {
        res.render('stories/edit', {project: project})
    });
}

module.exports = {
    create,
    updatePage
};