'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _authenticate = require('../middlewares/authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

var _events = require('../shared/validations/events');

var _events2 = _interopRequireDefault(_events);

var _events3 = require('../models/events');

var _events4 = _interopRequireDefault(_events3);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.delete('/:id', _authenticate2.default, function (req, res) {
  _events4.default.remove({ _id: req.params.id }, function (err, event) {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      console.log("server:" + req.params.id);
      res.json(req.params.id);
    }
  });
});

router.put('/add', _authenticate2.default, function (req, res) {
  var _req$body = req.body,
      options = _req$body.options,
      _id = _req$body._id;

  console.log(options);
  _events4.default.findOneAndUpdate({ _id: _id }, { $set: { "options": options } }, { new: true }, function (err, event) {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.json(event);
    }
  });
});

router.put('/', function (req, res) {
  var _req$body2 = req.body,
      options = _req$body2.options,
      _id = _req$body2._id;

  console.log(options);
  _events4.default.findOneAndUpdate({ _id: _id }, { $set: { "options": options } }, { new: true }, function (err, event) {
    if (err) {
      res.status(400).json({ error: err });
    } else {
      res.json(event);
    }
  });
});

router.get('', function (req, res) {
  return _events4.default.find({}).then(function (events) {
    res.json({ events: events });
  });
});

router.post('/', _authenticate2.default, function (req, res) {
  var _commonValidations = (0, _events2.default)(req.body),
      errors = _commonValidations.errors,
      isValid = _commonValidations.isValid;

  if (!isValid) {
    res.status(400).json(errors);
  } else {
    var _req$body3 = req.body,
        userName = _req$body3.userName,
        title = _req$body3.title,
        options = _req$body3.options,
        email = _req$body3.email;

    //remove comma and seperate each item with its value in an array example options = [['one',1], ['two',2]];

    options = options.replace(/^[ ]+|[ ]+$|[, ]+$/g, '').split(",").map(function (x) {
      return [x.replace(/^[ ]+|[ ]+$/g, ''), 0];
    });
    var newEvent = new _events4.default({
      username: userName,
      title: title,
      options: options
    });
    newEvent.save(function (err) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(201).json({ success: true });
      }
    });
  }
});

exports.default = router;