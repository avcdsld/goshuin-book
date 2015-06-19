'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var JinjaSchema = new Schema({
  jinjaId: String,
  name: String,
  kami: String,
  rank: String,
  gps: String,
  founded: String,
  province: String,
  description: String,
  comment: String
});

module.exports = mongoose.model('Jinja', JinjaSchema);
