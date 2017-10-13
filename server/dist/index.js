'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _users = require('./routes/users');

var _users2 = _interopRequireDefault(_users);

var _auth = require('./routes/auth');

var _auth2 = _interopRequireDefault(_auth);

var _events = require('./routes/events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 8080;

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(process.env.MONGODB_URI || 'mongodb://localhost/vote2', { useMongoClient: true });

var app = (0, _express2.default)();

app.use(_express2.default.static(_path2.default.join(__dirname, '../build')));

app.use(_bodyParser2.default.json());

app.use('/api/users', _users2.default);
app.use('/api/auth', _auth2.default);
app.use('/api/events', _events2.default);

app.listen(port, function () {
  return console.log('Running on port: ' + port);
});