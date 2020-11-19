const express = require('express');
const router = express.Router();
const projectsCtrl = require('../controllers/projects');

router.get('/', isLoggedIn, projectsCtrl.index);
router.get('/new', isLoggedIn, projectsCtrl.new);
router.get('/:id', projectsCtrl.show);
router.post('/', isLoggedIn, projectsCtrl.create);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;