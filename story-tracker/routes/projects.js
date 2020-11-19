const express = require('express');
const router = express.Router();
const projectsCtrl = require('../controllers/projects');

router.get('/', projectsCtrl.index);
router.get('/new', projectsCtrl.new);
// router.get('/:id', projectsCtrl.show);
router.post('/', projectsCtrl.create);

module.exports = router;