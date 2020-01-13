const express = require('express');

const router = express.Router();

/* POST vote */
router.post('/', (req, res) => {
  console.log('req ', req.body);
  // req.database.collection('voters').find(query).toArray((err, result) => {
  //   if (err) throw err;

  //   res.json({ success: true });
  // });

  // req.database.collection('candidates').insertOne(myobj, function(err, res) {
  //   if (err) throw err;
  //   console.log("1 document inserted");
  //   db.close();
  // });

  res.json({ success: true });
});

module.exports = router;

// dbo.collection("customers").insertOne(myobj, function(err, res) {
//   if (err) throw err;
//   console.log("1 document inserted");
//   db.close();
// });