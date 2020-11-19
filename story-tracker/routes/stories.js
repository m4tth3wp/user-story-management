const express = require('express');
const router = express.Router();
const storiesCtrl = require('../controllers/stories');

router.post('/projects/:id/stories', storiesCtrl.create);

module.exports = router;