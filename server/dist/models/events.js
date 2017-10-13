'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model('eventModel', eventSchema);