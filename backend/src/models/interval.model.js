// interval model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const intervalSchema = new Schema({
  numberOfSeconds: { type: Number, required: true },
});

module.exports = mongoose.model('Interval', intervalSchema);
