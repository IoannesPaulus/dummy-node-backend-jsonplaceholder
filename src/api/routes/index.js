const express = require('express');

const router = express.Router();
const postsController = require('../postsController');
const collectionsController = require('../collectionController');

router.get('/posts', postsController.listAll);
router.get('/posts/:id', postsController.getById);
router.post('/posts', postsController.create);
router.put('/posts/:id', postsController.update);
router.delete('/posts/:id', postsController.delete);
router.get('/collection', collectionsController.list);

module.exports = router;
