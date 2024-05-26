
const express = require('express');
const router = express.Router();
const { getVolunteer, postVolunteer } = require('../controller/volunteer'); 

router.get('/api/volunteer', getVolunteer);
router.post('/api/volunteer', postVolunteer);
module.exports = router;
