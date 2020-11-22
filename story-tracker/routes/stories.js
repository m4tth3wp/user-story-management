const express = require('express');
const router = express.Router();
const storiesCtrl = require('../controllers/stories');

router.get('/', isLoggedIn, storiesCtrl.index);
router.get('/new', isLoggedIn, storiesCtrl.new);
router.get('/:id', storiesCtrl.show);
router.post('/', isLoggedIn, storiesCtrl.create);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;