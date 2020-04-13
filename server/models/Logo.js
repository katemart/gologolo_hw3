var mongoose = require('mongoose');

var LogoSchema = new mongoose.Schema({
  id: String,
  text: {type: String, trim: true, minlength:1},
  color: String,
  fontSize: {type: Number, min: 4, max: 100},
  backgroundColor: String,
  borderColor: String,
  borderRadius: {type: Number, min: 0, max: 100},
  borderWidth: {type: Number, min: 0, max: 100},
  padding: {type: Number, min: 0, max: 100},
  margin: {type: Number, min: 0, max: 100},
  lastUpdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Logo', LogoSchema);