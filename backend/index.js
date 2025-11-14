require('dotenv').config();
const express = require('express');
const cors = require('cors');

const kakaoRoute = require('./routes/kakao');

const app = express();
const port = 3000;

const allowedOrigins = process.env.FRONTEND_URLS.split(',');

app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use('/api/kakao', kakaoRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
