const express = require('express');
const router = express.Router();
const Photo = require('../models/Photo');

// API endpoint to get all photos
router.get('/api/photos', async (req, res) => {
  try {
    const photos = await Photo.find();
    res.json(photos);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Route to render the Add Photo page
router.get('/addPhoto', (req, res) => {
  res.render('addPhoto');
});

// Route to add a new photo
router.post('/photos/add', async (req, res) => {
  const { title, description, image, category } = req.body;
  const newPhoto = new Photo({ title, description, image, category });

  try {
    await newPhoto.save();
    res.redirect('/portfolio');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Route to render the Portfolio page
router.get('/portfolio', async (req, res) => {
  try {
    const photos = await Photo.find();
    res.render('portfolio', { photos });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
