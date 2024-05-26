const path = require("path")
const DonationModel = require("../model/donation")

const getDonation = async (req, res) => {
    try {
      const donations = await DonationModel.find();
      res.json(donations);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  const postDonation = async (req, res, next) => {
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
  
      let donation = await DonationModel.create({
        ...req.body,
        image: imagePath
      });
  
      res.send(donation);
    } catch (err) {
      next(err);
    }
  };
  
  module.exports = { postDonation, getDonation };