
const express = require('express');
const router = express.Router();
const { getBlog, postBlog, getBlogById } = require('../controller/blog'); 

router.get('/api/blogs', getBlog);
router.post('/api/blogs', postBlog);
router.get('/api/blogs/:id', getBlogById)
module.exports = router;
