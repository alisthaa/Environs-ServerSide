const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const serviceSchema = new mongoose.Schema({
    image: String,
    p: String,
  });
  
  const ServiceModel = mongoose.model('Service', serviceSchema);
  
module.exports = ServiceModel;