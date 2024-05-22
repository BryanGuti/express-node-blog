// Add main dependencies
const express = require('express');
const expressLayout = require('express-ejs-layouts');

// Set environment variables
require('dotenv').config();

// Create and set the server's configs
const app = express();
const PORT = process.env.PORT ?? 5000;

// Set the static files folder
app.use(express.static('public'));

// Set template engine
app.use(expressLayout);
app.set('layout', './layout/main');
app.set('view engine', 'ejs');

// Set routes
app.use('/', require('./src/routes/home'));

app.listen(PORT, () => {
  console.log(`App running at localhost:${PORT}`);
})