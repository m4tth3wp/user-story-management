const User = require('../models/user');

function index(req, res) {
    User.findById(req.user._id, function(err, user) {
        let storyList = user.stories
        res.render('stories/index', {
            title: 'All Stories',
            user,
            storyList
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

function show(req, res) {
    User.findById(req.user._id, function(err, userData) {
        console.log(userData)
        let storyId = req.params.id
        res.render('stories/show', {
            userData,
            storyId
        })
    })
}

function newStory(req, res) {
    res.render('stories/new', { title: 'Add Story' });
}

function updateStory(req, res) {
    let params = req.params.id
    // Note the cool "dot" syntax to query on the property of a subdoc
    User.findOne({'stories._id': params}, function(err, user) {
      // Find the comment subdoc using the id method on Mongoose arrays
      // https://mongoosejs.com/docs/subdocs.html
      const commentSubdoc = user.stories.id(req.params.id);
      // Ensure that the comment was created by the logged in user
      // Update the text of the comment
      commentSubdoc.text = req.body.text;
      // Save the updated book
      user.save(function(err) {
        console.log('readthissssssss',req.body)
        // Redirect back to the book's show view
        res.redirect(`/stories`);
      });
    });
  }


function deleteStory(req, res) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    User.findOne({'stories._id': req.params.id}, function(err, user) {
      // Find the comment subdoc using the id method on Mongoose arrays
      // https://mongoosejs.com/docs/subdocs.html
      const commentSubdoc = user.stories.id(req.params.id);
      // Ensure that the comment was created by the logged in user
      // Remove the comment using the remove method of the subdoc
      commentSubdoc.remove();
      // Save the updated book
      User.save(function(err) {
        // Redirect back to the book's show view
        res.redirect(`/stories`);
      });
    });
}

module.exports = {
    index,
    new: newStory,
    show,
    create,
    updateStory,
    deleteStory
}