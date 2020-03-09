const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const pokemonRoute = require('../routes/pokemon-route');

class App {
  constructor() {
    this.server = express();
    express().use(cors());
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: true }));
  }

  routes() {
    this.server.use('/api/pokemon', pokemonRoute);
  }
}

module.exports = new App();
