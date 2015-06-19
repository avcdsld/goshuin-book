'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GoshuinSchema = new Schema({
  goshuinId: String,
  jinjaId: String,
  jinjaName: String,
  imgUrl: String,
  visitDate: String,
  description: String,
  comment: String
});

module.exports = mongoose.model('Goshuin', GoshuinSchema);
