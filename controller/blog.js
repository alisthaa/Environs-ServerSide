const path = require("path")
const BlogModel = require("../model/blog")

const getBlog = async (req, res) => {
    try {
      const blogs = await BlogModel.find();
      res.json(blogs);
    } catch (err) {
      res.status(500).send(err);
    }
  };

  const postBlog = async (req, res, next) => {
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
  
      let blog = await BlogModel.create({
        ...req.body,
        image: imagePath
      });
  
      res.send(blog);
    } catch (err) {
      next(err);
    }
  };
  const getBlogById = async (req, res, next) => {
    const blogId = req.params.id;
  
    try {
      const blog = await BlogModel.findById(blogId);
  
      if (!blog) {
        return res.status(404).json({ error: "blog not found" });
      }
  
      res.json({ blog });
    } catch (err) {
      next(err);
    }
  };
  module.exports = { postBlog, getBlog , getBlogById};