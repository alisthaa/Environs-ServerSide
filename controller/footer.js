const path = require("path")
const FooterModel = require("../model/footer")

const getFooter = async (req, res) => {
    try {
      const footer = await FooterModel.find();
      res.json(footer);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  const postFooter = async (req, res, next) => {
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
  
      let footer = await FooterModel.create({
        ...req.body,
        image: imagePath
      });
  
      res.send(footer);
    } catch (err) {
      next(err);
    }
  };
  
  module.exports = { postFooter, getFooter };