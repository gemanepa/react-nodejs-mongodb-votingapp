const express = require('express');

const router = express.Router();

/* POST vote */
router.post('/', (req, res) => {
  req.database.collection('candidates').findOne({ name: req.body.candidate.name }, (err, candidate) => {
    if (err) throw err;

    try {
      req.database.collection('candidates').updateOne(
        { _id: candidate._id }, // eslint-disable-line no-underscore-dangle
        { $set: { votes: candidate.votes + 1 } }
      );

      req.database.collection('voters').insertOne({ _id: Number(req.body.voter.dni), ...req.body.voter }, (error) => {
        if (error) throw error;
      });
      res.json({ success: true });
    } catch (e) {
      res.json({ success: false });
    }
  });
});

module.exports = router;
