const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const causeSchema = new mongoose.Schema({
    image: String,
    p: String,
    percentage: Number,
  });
  
  const CauseModel = mongoose.model('Cause', causeSchema);
  
module.exports = CauseModel;