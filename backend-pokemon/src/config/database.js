require('dotenv').config();
const mongoose = require('mongoose');
const dbUrl = process.env.API_URL;
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

mongoose.connect(dbUrl, dbOptions);

mongoose.connection.on('connected', () => {
  console.log('MongoDB: Connected');
});
mongoose.connection.on('disconnected', err => {
  console.warn('MongoDB: Disconnected => ', err);
});
mongoose.connection.on('error', err => {
  console.error('MongoDB: ERROR => ', err);
});
