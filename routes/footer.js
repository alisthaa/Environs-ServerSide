
const express = require('express');
const router = express.Router();
const { getFooter, postFooter } = require('../controller/footer'); 

router.get('/api/footer', getFooter);
router.post('/api/footer', postFooter);
module.exports = router;
