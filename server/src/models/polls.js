var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pollsSchema = new Schema({
  title:{
    type: String,
    required: true
  }
  creator:{
    type: String,
    required: true
  },
  options:{
    type: Array,
    required: true
  },
  timestamp:{
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model('UserModel', userSchema);
