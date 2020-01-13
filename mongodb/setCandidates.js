const candidates = [
  {
    name: 'Daenerys',
    house: 'Targaryen'
  },
  {
    name: 'Tyrion',
    house: 'Lannister'
  },
  {
    name: 'Cersei',
    house: 'Lannister'
  },
  {
    name: 'Jon Snow',
    house: 'Stark'
  },
  {
    name: 'Sansa',
    house: 'Stark'
  },
  {
    name: 'Night King',
    house: 'White Walkers'
  }
];

function setCandidates(db) {
  candidates.forEach((candidate, index) => {
    db.collection('candidates')
      .updateOne(
        { _id: (index + 1) },
        {
          $setOnInsert: {
            candidate: candidate.name,
            house: candidate.house,
            votes: 0
          }
        },
        { upsert: true }
      );
  });
}

module.exports = setCandidates;
