'use strict';

var _ = require('lodash');
var Goshuin = require('./goshuin.model');

// Get list of goshuins
exports.index = function(req, res) {
  Goshuin.find(function (err, goshuins) {
    if(err) { return handleError(res, err); }
    return res.json(200, goshuins);
  });
};

// Get a single goshuin
exports.show = function(req, res) {
  Goshuin.findById(req.params.id, function (err, goshuin) {
    if(err) { return handleError(res, err); }
    if(!goshuin) { return res.send(404); }
    return res.json(goshuin);
  });
};

// Creates a new goshuin in the DB.
exports.create = function(req, res) {
  Goshuin.create(req.body, function(err, goshuin) {
    if(err) { return handleError(res, err); }
    return res.json(201, goshuin);
  });
};

// Updates an existing goshuin in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Goshuin.findById(req.params.id, function (err, goshuin) {
    if (err) { return handleError(res, err); }
    if(!goshuin) { return res.send(404); }
    var updated = _.merge(goshuin, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, goshuin);
    });
  });
};

// Deletes a goshuin from the DB.
exports.destroy = function(req, res) {
  Goshuin.findById(req.params.id, function (err, goshuin) {
    if(err) { return handleError(res, err); }
    if(!goshuin) { return res.send(404); }
    goshuin.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
