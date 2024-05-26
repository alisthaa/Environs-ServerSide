const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const donationSchema = new mongoose.Schema({
    image: String,
    p: String,
  });
  
  const DonationModel = mongoose.model('Donation', donationSchema);
  
module.exports = DonationModel;