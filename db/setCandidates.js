const candidates = [
  {
    name: 'Daenerys',
    house: 'Targaryen',
    img: 'daenerys'
  },
  {
    name: 'Tyrion',
    house: 'Lannister',
    img: 'tyrion'
  },
  {
    name: 'Cersei',
    house: 'Lannister',
    img: 'cersei'
  },
  {
    name: 'Jon Snow',
    house: 'Stark',
    img: 'jonsnow'
  },
  {
    name: 'Sansa',
    house: 'Stark',
    img: 'sansa'
  },
  {
    name: 'Night King',
    house: 'White Walkers',
    img: 'nightking'
  }
];

function setCandidates(db) {
  candidates.forEach((candidate, index) => {
    db.collection('candidates')
      .updateOne(
        { _id: (index + 1) },
        {
          $setOnInsert: {
            name: candidate.name,
            house: candidate.house,
            img: candidate.img,
            votes: 0
          }
        },
        { upsert: true }
      );
  });
}

module.exports = setCandidates;
