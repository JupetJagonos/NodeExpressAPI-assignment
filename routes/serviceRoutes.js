const express = require('express');
const router = express.Router();
const Service = require('../models/Service'); // Import the Service model

// API endpoint to get all services in JSON format
router.get('/api/services', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services); // Respond with services as a JSON array
  } catch (err) {
    res.status(500).send(err.message); // Handle errors
  }
});

// GET route to render the Add Service page
router.get('/addService', (req, res) => {
    res.render('addService'); // Render the Add Service form
});

// POST route to add a new service
router.post('/services/add', async (req, res) => {
  const { name, description, price } = req.body; // Extract data from request body
  const newService = new Service({ name, description, price }); // Create new Service instance

  try {
    await newService.save(); 
    res.redirect('/service'); 
  } catch (err) {
    res.status(400).send(err.message); 
  }
});

// Route to render the services page
router.get('/service', async (req, res) => {
  try {
    const services = await Service.find(); 
    res.render('services', { services }); // Render the services view with the data
  } catch (err) {
    res.status(500).send(err.message); 
  }
});

module.exports = router; // Export the router
