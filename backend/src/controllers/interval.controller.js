// interval controller
const Interval = require('../models/interval.model');
const router = require('express').Router();
router.route('/').post((req, res) => {
  let interval = new Interval(req.body);
  Interval.find()
    .then((intervals) => {
      if (intervals.length < 1) interval.save().then((saved) => res.json(saved));
      else {
        intervals[0].numberOfSeconds = interval.numberOfSeconds;
        intervals[0].save().then((upd) => res.json(upd));
      }
    })
    .catch((err) => res.status(400).json('POST Interval Error: ' + err));
});
router.route('/').get((req, res) => {
  Interval.find({}, { _id: 0, __v: 0 })
    .then((intervals) => {
      if (intervals.length < 1) res.status(404).json('No interval found or set');
      res.json(intervals[0]);
    })
    .catch((err) => res.status(400).json('GET Interval Error: ' + err));
});

module.exports = router;
