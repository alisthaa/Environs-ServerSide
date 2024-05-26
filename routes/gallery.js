
const express = require('express');
const router = express.Router();
const { getGallery, postGallery } = require('../controller/gallery'); 

router.get('/api/gallery', getGallery);
router.post('/api/gallery', postGallery);
module.exports = router;
