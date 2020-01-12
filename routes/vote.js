const express = require('express');

const router = express.Router();

/* POST vote */
router.post('/', (req, res) => {
  console.log('req ', req.body);
  res.json({ success: true });
});

module.exports = router;