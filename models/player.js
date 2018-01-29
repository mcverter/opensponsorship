'use strict';

const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: String,
  image: Buffer,
  nationality: String,
  location: String,
  dob: Date,
  gender: String,
  married: Boolean,
  alcohol: Boolean,
  sports: Array,
  team: String,
  league: String,
  about: String,
  facebook: String,
  twitter: String,
  instagram: String,
  snapchat: String,
  youtube: String,
});

module.exports = mongoose.model('Player', PlayerSchema);
