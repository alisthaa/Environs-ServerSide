const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const eventSchema = new mongoose.Schema({
    image: String,
  });
  
  const EventModel = mongoose.model('Event', eventSchema);
  
module.exports = EventModel;