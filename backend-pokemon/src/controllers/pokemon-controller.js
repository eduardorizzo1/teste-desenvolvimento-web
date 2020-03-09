const Pokemon = require('../models/Pokemon');

class PokemonController {
  contructor() {}
  async get(req, res) {
    let pokemon = await Pokemon.find();
    return res.status(200).send(pokemon);
  }

  async getById(req, res) {
    let pokemon = await Pokemon.findById(req.params.id);
    return res.status(200).send(pokemon);
  }

  async post(req, res) {
    console.log(req.body);
    let pokemon = await Pokemon.create(req.body);
    return res.status(201).send(pokemon);
  }

  async put(req, res) {
    await Pokemon.findByIdAndUpdate(req.params.id, { $set: req.body });
    let pokemon = await Pokemon.findById(req.params.id);
    return res.status(202).send(pokemon);
  }

  async delete(req, res) {
    let pokemon = await Pokemon.findByIdAndRemove(req.params.id);
    return res.status(204).send(pokemon);
  }
}

module.exports = new PokemonController();
