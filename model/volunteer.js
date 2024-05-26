const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const volunteerSchema = new mongoose.Schema({
    image: String,
  });
  
  const VolunteerModel = mongoose.model('Volunteer', volunteerSchema);
  
module.exports = VolunteerModel;