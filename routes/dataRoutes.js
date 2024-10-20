const express = require('express');
const router = express.Router();
const Photo = require('../models/Photo'); 
const Service = require('../models/Service'); 
const BlogPost = require('../models/BlogPost'); // Import the BlogPost model (optional) I just added this

// Route to seed sample photos
router.get('/seedPhotos', async (req, res) => {
  const samplePhotos = [
    {
      title: "Alberta Wedding",
      description: "A beautiful lakeside wedding ceremony surrounded by rockies of Alberta.",
      image: "images/wedding1.jpg", 
      category: "wedding",
    },
    {
      title: "Concert Night",
      description: "An electrifying night filled with music and energy.",
      image: "images/concert1.jpg",
      category: "concert",
    },
    {
      title: "Urban Exploration",
      description: "Capturing the essence of street life in the city.",
      image: "iamges/street1.jpg",
      category: "street",
    }
  ];

  try {
    await Photo.deleteMany({}); 
    await Photo.insertMany(samplePhotos); 
    res.send("Sample photos added!"); 
  } catch (err) {
    res.status(500).send(err.message); 
  }
});

// Route to seed sample services
router.get('/seedServices', async (req, res) => {
  const sampleServices = [
    {
      name: "Full-Day Wedding Photography",
      description: "Comprehensive coverage of your wedding day, including the ceremony and reception.",
      price: "$2000"
    },
    {
      name: "Concert Videography Package",
      description: "Professional videography services for capturing live performances.",
      price: "$1200"
    },
    {
      name: "Urban Street Photography Session",
      description: "A two-hour photo shoot in selected urban locations to capture the essence of city life.",
      price: "$350"
    },
  ];

  try {
    await Service.deleteMany({}); 
    await Service.insertMany(sampleServices); 
    res.send("Sample services added!"); 
  } catch (err) {
    res.status(500).send(err.message); 
  }
});

// Route to seed a sample blog post
router.get('/seedBlogPost', async (req, res) => {
  const sampleBlogPost = {
    title: "Capturing the Magic: My Experience at a Wedding",
    content: "Attending a wedding as a photographer is always a magical experience. The blend of emotions, joy, and beautiful moments to capture creates an unforgettable atmosphere.",
    author: "Pedro Jagonos",
    date: new Date()
  };

  try {
    await BlogPost.deleteMany({}); 
    await BlogPost.create(sampleBlogPost); 
    res.send("Sample blog post added!"); 
  } catch (err) {
    res.status(500).send(err.message); 
  }
});

module.exports = router; // Export the router
