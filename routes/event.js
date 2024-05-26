
const express = require('express');
const router = express.Router();
const { getEvent, postEvent, getEventById } = require('../controller/event'); 

router.get('/api/events', getEvent);
router.post('/api/events', postEvent);
router.get('/api/events/:id', getEventById)
module.exports = router;
