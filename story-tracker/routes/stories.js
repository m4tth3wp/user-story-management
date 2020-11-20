const express = require('express');
const router = express.Router();
const storiesCtrl = require('../controllers/stories');

router.post('/projects/:id/stories', storiesCtrl.create);
router.get('/stories/:id/edit', storiesCtrl.updatePage);

module.exports = router;