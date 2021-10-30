const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => { });

app.get('/aprova', async (req, res) => {
  res.redirect('https://drive.google.com/file/d/1MJBc5ooLyfcvuqbsYDSzv-__3c-eu-e4/view?usp=sharing');
});