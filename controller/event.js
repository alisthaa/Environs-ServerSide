const path = require("path")
const EventModel = require("../model/event")

const getEvent = async (req, res) => {
    try {
      const events = await EventModel.find();
      res.json(events);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  const postEvent = async (req, res, next) => {
    let rootPath = path.resolve();
    let uploadPath = path.join(rootPath, 'uploads');
    let imagePath = null;
  
    try {
      if (req.files?.image) {
        let uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        let tempPath = path.join('/uploads', `${uniqueSuffix}-${req.files.image.name}`);
        let destination = path.join(rootPath, tempPath);
  
        await req.files.image.mv(destination);
  
        imagePath = tempPath.replace(/\\/g, "/");
      }
  
      let event = await EventModel.create({
        ...req.body,
        image: imagePath
      });
  
      res.send(event);
    } catch (err) {
      next(err);
    }
  };
  const getEventById = async (req, res, next) => {
    const eventId = req.params.id;
  
    try {
      const event = await EventModel.findById(eventId);
  
      if (!event) {
        return res.status(404).json({ error: "event not found" });
      }
  
      res.json({ event });
    } catch (err) {
      next(err);
    }
  };
  module.exports = { postEvent, getEvent , getEventById};