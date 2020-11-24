const express = require('express');
const router = express.Router();
const storiesCtrl = require('../controllers/stories');

//get the index page for stories
router.get('/', isLoggedIn, storiesCtrl.index);

// get the new story page and create a new story
router.get('/new', isLoggedIn, storiesCtrl.new);
router.post('/', isLoggedIn, storiesCtrl.create);

//get the edit sotry page and update the story
router.get('/:id/edit', storiesCtrl.editStory);
router.put('/:id', isLoggedIn, storiesCtrl.updateStory);

//delete a story
router.delete('/:id', storiesCtrl.deleteStory);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;