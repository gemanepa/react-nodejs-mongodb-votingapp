const express = require('express');

const router = express.Router();

/* GET voter */
router.get('/', (req, res) => {
  console.log(req.headers['x-dni']);
  res.json({ dni: false });
});

module.exports = router;
