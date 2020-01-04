const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const message = 'Hello World!';
  res.render('index', { message });
});

module.exports = router;
