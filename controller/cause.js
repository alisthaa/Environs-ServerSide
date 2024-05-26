const path = require("path")
const CauseModel = require("../model/cause")

const getCause = async (req, res) => {
    try {
      const causes = await CauseModel.find();
      res.json(causes);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  const postCause = async (req, res, next) => {
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
  
      let cause = await CauseModel.create({
        ...req.body,
        image: imagePath
      });
  
      res.send(cause);
    } catch (err) {
      next(err);
    }
  };
  const getCauseById = async (req, res, next) => {
    const causeId = req.params.id;
  
    try {
      const cause = await CauseModel.findById(causeId);
  
      if (!cause) {
        return res.status(404).json({ error: "cause not found" });
      }
  
      res.json({ cause });
    } catch (err) {
      next(err);
    }
  };
  module.exports = { postCause, getCause , getCauseById};