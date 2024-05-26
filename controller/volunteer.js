const path = require("path")
const VolunteerModel = require("../model/volunteer")

const getVolunteer = async (req, res) => {
    try {
      const volunteer = await VolunteerModel.find();
      res.json(volunteer);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  const postVolunteer = async (req, res, next) => {
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
  
      let volunteer = await VolunteerModel.create({
        ...req.body,
        image: imagePath
      });
  
      res.send(volunteer);
    } catch (err) {
      next(err);
    }
  };
  
  module.exports = { postVolunteer, getVolunteer };