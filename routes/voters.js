const express = require('express');

const router = express.Router();

/* GET voters */
router.get('/', (req, res) => {
  console.log(req.headers['x-dni']);
  res.json({ body: 'UP' });
});

module.exports = router;
