const express = require('express');
const Datastore = require('nedb');
const app = express();
const PORT = 3000 || process.env.PORT;

const collections = {
  visits: new Datastore('./database/collections/visits.db')
};

collections.visits.loadDatabase();

app.listen(PORT, () => { });

app.get('/aprova', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const data = { date: Date.now(), ip };
  collections.visits.insert(data, (err, doc) => { });
  res.redirect('https://drive.google.com/file/d/1MJBc5ooLyfcvuqbsYDSzv-__3c-eu-e4/view?usp=sharing');
});