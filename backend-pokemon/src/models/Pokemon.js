const { Schema, model } = require('mongoose');

const PokemonSchema = new Schema(
  {
    Row: Number,
    Name: String,
    Pokedex_Number: Number,
    ImgName: String,
    Generation: Number,
    EvolutionStage: String,
    Evolved: Boolean,
    FamilyID: Number,
    CrossGen: Boolean,
    Type1: String,
    Type2: String,
    Weather1: String,
    Weather2: String,
    StatTotal: Number,
    ATK: Number,
    DEF: Number,
    STA: Number,
    Legendary: Boolean,
    Aquireable: Number,
    Spawns: Number,
    Regional: Number,
    Raidable: Number,
    Hatchable: Number,
    Shiny: Boolean,
    Nest: Boolean,
    New: Boolean,
    NotGettable: Boolean,
    FutureEvolve: Boolean,
    cp40: Number,
    cp39: Number
  },
  {
    versionKey: false
  }
);

module.exports = model('Pokemon', PokemonSchema);
