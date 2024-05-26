
const express = require('express');
const router = express.Router();
const { getDonation, postDonation } = require('../controller/donation'); 

router.get('/api/donations', getDonation);
router.post('/api/donations', postDonation);
module.exports = router;
