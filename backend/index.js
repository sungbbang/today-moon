require('dotenv').config();
const express = require('express');
const cors = require('cors');

const kakaoRoute = require('./routes/kakao');

const app = express();
const port = 3000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use('/api/kakao', kakaoRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
