const path = require("path")
const ServiceModel = require("../model/service")

const getServices = async (req, res) => {
    try {
      const services = await ServiceModel.find();
      res.json(services);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  const postServices = async (req, res, next) => {
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
  
      let service = await ServiceModel.create({
        ...req.body,
        image: imagePath
      });
  
      res.send(service);
    } catch (err) {
      next(err);
    }
  };
  
  module.exports = { postServices, getServices };