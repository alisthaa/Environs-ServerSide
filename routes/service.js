
const express = require('express');
const router = express.Router();
const { getServices, postServices } = require('../controller/service'); 

router.get('/api/services', getServices);
router.post('/api/services', postServices);
module.exports = router;
