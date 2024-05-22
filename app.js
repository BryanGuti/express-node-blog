// Main dependencies
const express = require('express');
const expressLayout = require('express-ejs-layouts');

// Helper dependencies
const path = require('node:path');

// Environment variables
require('dotenv').config();

// Server's configs
const app = express();
const PORT = process.env.PORT ?? 5000;

// Static files folder
app.use(express.static('public'));

// Templating engine
app.set('views', path.join(__dirname, '/src/views'));
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./src/routes/home'));

// Running server
app.listen(PORT, () => {
  console.log(`App running at localhost:${PORT}`);
})