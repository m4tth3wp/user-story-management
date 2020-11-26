const User = require('../models/user');

function index(req, res) {
    User.findById(req.user._id, function(err, user) {
        let storyList = user.stories
        let userLoggedIn = req.user.name
        res.render('stories/index', {
            title: 'All Stories',
            user,
            storyList,
            userLoggedIn
        })
    })
}

function create(req, res) {
    User.findById(req.user._id, function(err, user) {
        const story = req.body
        user.stories.push(story)
        user.save()
        res.redirect('stories');
    }
    )}

function editStory(req, res) {
    let storyId = req.params.id
    User.findOne({'stories._id': storyId}, function(err, user) {
        const storyDoc = user.stories.id(storyId)
        let storyTitle = storyDoc.title
        let storyDescription = storyDoc.description
        res.render('stories/show', {
            user,
            storyId,
            storyTitle,
            storyDescription
        })
    } )
}

function newStory(req, res) {
    res.render('stories/new', { title: 'Add Story' });
}

function updateStory(req, res) {
    let params = req.params.id
    User.findOne({'stories._id': params}, function(err, user) {
      const storySubdoc = user.stories.id(req.params.id);
      // Update the text of the comment
      storySubdoc.title = req.body.title;
      storySubdoc.description = req.body.description;
      storySubdoc.status = req.body.status;
      // Save the updated book
      user.save(function(err) {
        res.redirect(`/stories`);
      });
    });
  }

function deleteStory(req, res) {
    User.findOne({'stories._id': req.params.id}, function(err, user) {
      // Find the comment subdoc using the id method on Mongoose arrays
      const commentSubdoc = user.stories.id(req.params.id);
      commentSubdoc.remove();
      user.save(function(err) {
        res.redirect(`/stories`);
      });
    });
}

module.exports = {
    index,
    new: newStory,
    editStory,
    create,
    updateStory,
    deleteStory
}