const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const pageName = 'Home';
  res.render('home', { pageName });
});

module.exports = router;
