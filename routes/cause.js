
const express = require('express');
const router = express.Router();
const { getCause, postCause, getCauseById } = require('../controller/cause'); 

router.get('/api/causes', getCause);
router.post('/api/causes', postCause);
router.get('/api/causes/:id', getCauseById)
module.exports = router;
