const express = require('express');
const router = express.Router();

// Example API endpoint
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

module.exports = router;
