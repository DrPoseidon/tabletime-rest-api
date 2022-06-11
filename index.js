require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router');

const PORT = process.env.PORT || 7001;
const app = express();

app.use(cors({
  origin: '*'
}));

app.use(cookieParser());
app.use(express.json());
app.use('/api', router);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    app.listen(PORT, () => {
      console.log(`Сервер запущен на ${ PORT } порту `);
    })
  } catch(e) {
    console.log(e);
  }
};

start()
