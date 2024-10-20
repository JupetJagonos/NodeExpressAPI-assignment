const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');

// API endpoint to get all blog posts
router.get('/api/blogPosts', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find(); // Fetch all blog posts from the database
    res.json(blogPosts); 
  } catch (err) {
    res.status(500).send(err.message); 
  }
});

// Route to render the blog page
router.get('/blog', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find(); // Fetch all blog posts for rendering
    res.render('blog', { blogPosts }); 
  } catch (err) {
    res.status(500).send(err.message); 
  }
});

// Route to render the Add Blog Post page
router.get('/blog/add', (req, res) => {
  res.render('addPost'); // Render the addPost.pug view
});

// Route to add a new blog post
router.post('/blog/add', async (req, res) => {
  const { title, content, author } = req.body; // Extract data from request body
  const newPost = new BlogPost({ title, content, author }); // Create a new blog post
  
  try {
    await newPost.save(); // Save the new blog post to the database
    res.redirect('/blog'); // Redirect to the blog page after adding
  } catch (err) {
    res.status(400).send(err.message); // Handle validation errors
  }
});

module.exports = router; // Export the router
