const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const gallerySchema = new mongoose.Schema({
    image: String,
  });
  
  const GalleryModel = mongoose.model('Gallery', gallerySchema);
  
module.exports = GalleryModel;