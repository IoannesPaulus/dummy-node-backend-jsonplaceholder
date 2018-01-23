const express = require('express');

const router = express.Router();
const postsController = require('../postsController');

router.get('/posts', postsController.listAll);
router.get('/posts/:id', postsController.getById);
router.post('/posts', postsController.create);
router.put('/posts/:id', postsController.update);
router.delete('/posts/:id', postsController.delete);

module.exports = router;
