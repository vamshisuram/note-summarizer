const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const cors = require('cors');

const app = express();

app.use(cors()); // Enable CORS

app.use(express.json()); // Parse JSON bodies
// app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', indexRouter);

module.exports = app;
