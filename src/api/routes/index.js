const express = require('express');

const router = express.Router();
const postsController = require('../postsController');

router.get('/posts', postsController.getPosts);

module.exports = router;
