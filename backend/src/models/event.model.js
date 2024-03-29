// event model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    event: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Event', eventSchema);
