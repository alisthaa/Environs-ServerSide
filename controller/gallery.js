const path = require("path")
const GalleryModel = require("../model/gallery")

const getGallery = async (req, res) => {
    try {
      const gallery = await GalleryModel.find();
      res.json(gallery);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  const postGallery = async (req, res, next) => {
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
  
      let gallery = await GalleryModel.create({
        ...req.body,
        image: imagePath
      });
  
      res.send(gallery);
    } catch (err) {
      next(err);
    }
  };
  
  module.exports = { postGallery, getGallery };