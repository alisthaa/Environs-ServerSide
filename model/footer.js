const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const footerSchema = new mongoose.Schema({
    image: String,
  });
  
  const FooterModel = mongoose.model('Footer', footerSchema);
  
module.exports = FooterModel;