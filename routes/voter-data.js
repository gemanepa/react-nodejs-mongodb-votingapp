const express = require('express');

const router = express.Router();

/* GET voter-data page. */
router.get('/', (req, res) => {
  const pageName = 'Voter Data';
  res.render('voter-data', { pageName });
});

module.exports = router;
