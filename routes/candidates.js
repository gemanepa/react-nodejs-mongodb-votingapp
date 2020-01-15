const express = require('express');

const router = express.Router();

/* GET voter */
router.get('/', (req, res) => {
  const votecount = req.headers['vote-count'];

  req.database.collection('candidates').find().toArray((err, result) => {
    if (err) throw err;
    const candidates = result;

    // eslint-disable-next-line no-param-reassign
    if (votecount === 'false') candidates.forEach((candidate) => delete candidate.votes);

    res.json(candidates);
  });
});

module.exports = router;
