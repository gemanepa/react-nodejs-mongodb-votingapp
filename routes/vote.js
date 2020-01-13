/* eslint-disable no-underscore-dangle */
const express = require('express');

const router = express.Router();

/* POST vote */
router.post('/', (req, res) => {
  console.log('req ', req.body);

  req.database.collection('candidates').findOne({ name: req.body.candidate.name }, (err, candidate) => {
    if (err) throw err;
    // console.log('result ', result);

    try {
      req.database.collection('candidates').updateOne(
        { _id: candidate._id },
        { $set: { votes: candidate.votes + 1 } }
      );

      req.database.collection('voters').insertOne({ _id: Number(req.body.voter.dni), ...req.body.voter }, (error, res) => {
        if (error) throw error;
      });
      res.json({ success: true });
    } catch (e) {
      res.json({ success: false });
    }
  });

  // req.database.collection('voters').find(query).toArray((err, result) => {
  //   if (err) throw err;

  //   res.json({ success: true });
  // });

  // req.database.collection('candidates').insertOne(myobj, function(err, res) {
  //   if (err) throw err;
  //   console.log("1 document inserted");
  //   db.close();
  // });
});

module.exports = router;

// dbo.collection("customers").insertOne(myobj, function(err, res) {
//   if (err) throw err;
//   console.log("1 document inserted");
//   db.close();
// });
