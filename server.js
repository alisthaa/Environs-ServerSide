const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const serviceRoutes = require('./routes/service');
const donationRoutes = require('./routes/donation');
const causeRoutes = require('./routes/cause');
const eventRoutes = require('./routes/event');
const blogRoutes = require('./routes/blog');
const galleryRoutes = require('./routes/gallery');
const volunteerRoutes = require('./routes/volunteer');
const footerRoutes = require('./routes/footer');
const fileUpload = require('express-fileupload')
mongoose.connect('mongodb://127.0.0.1:27017/environs')
  .then(() => console.log('Connected!'));
app.use(cors())
app.use(fileUpload()) 
app.use(express.json()) // runs for each request
app.use('/uploads', express.static('uploads'))
app.use(serviceRoutes)
app.use(donationRoutes)
app.use(causeRoutes)
app.use(eventRoutes)
app.use(blogRoutes)
app.use(galleryRoutes)
app.use(volunteerRoutes)
app.use(footerRoutes)
app.listen(3000, () => {
    console.log("started")
  })