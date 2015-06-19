'use strict';

var _ = require('lodash');
var Jinja = require('./jinja.model');

// Get list of jinjas
exports.index = function(req, res) {
  Jinja.find(function (err, jinjas) {
    if(err) { return handleError(res, err); }
    return res.json(200, jinjas);
  });
};

// Get a single jinja
exports.show = function(req, res) {
  Jinja.findById(req.params.id, function (err, jinja) {
    if(err) { return handleError(res, err); }
    if(!jinja) { return res.send(404); }
    return res.json(jinja);
  });
};

// Creates a new jinja in the DB.
exports.create = function(req, res) {
  Jinja.create(req.body, function(err, jinja) {
    if(err) { return handleError(res, err); }
    return res.json(201, jinja);
  });
};

// Updates an existing jinja in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Jinja.findById(req.params.id, function (err, jinja) {
    if (err) { return handleError(res, err); }
    if(!jinja) { return res.send(404); }
    var updated = _.merge(jinja, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, jinja);
    });
  });
};

// Deletes a jinja from the DB.
exports.destroy = function(req, res) {
  Jinja.findById(req.params.id, function (err, jinja) {
    if(err) { return handleError(res, err); }
    if(!jinja) { return res.send(404); }
    jinja.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}