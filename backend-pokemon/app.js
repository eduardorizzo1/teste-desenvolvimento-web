const app = require('./src/config/express');
require('./src/config/database');
require('dotenv').config();

var _port = process.env.PORT || 5000;

app.server.listen(_port, () => {
  console.log(`Port: ${_port}`);
});

console.log(`Dev Env: ${process.env.NODE_ENV}`);
