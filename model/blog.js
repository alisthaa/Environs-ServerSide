const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const blogSchema = new mongoose.Schema({
    image: String,
  });
  
  const BlogModel = mongoose.model('Blog', blogSchema);
  
module.exports = BlogModel;