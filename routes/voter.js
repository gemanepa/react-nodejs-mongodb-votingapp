const express = require('express');

const router = express.Router();

/* GET voter */
router.get('/', (req, res) => {
  const query = { dni: req.headers['x-dni'] };

  req.database.collection('voters').find(query).toArray((err, result) => {
    if (err) throw err;

    res.json({ dni: result[0] });
  });
});

module.exports = router;
