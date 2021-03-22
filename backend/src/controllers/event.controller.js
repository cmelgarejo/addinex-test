// event controller
const Event = require('../models/event.model');
const router = require('express').Router();
router.route('/').post((req, res) => {
  let event = new Event(req.body);
  event
    .save()
    .then((ev) => res.json(ev))
    .catch((err) => res.status(422).json('POST Event Error: ' + err));
});
router.route('/').get((req, res) => {
  Event.find({}, { __v: 0 })
    .then((events) => res.json(events))
    .catch((err) => res.status(400).json('GET Event Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Event.deleteOne({ _id: req.params['id'] })
    .then((ev) => res.json(ev))
    .catch((err) => res.status(400).json('DELETE Event Error: ' + err));
});

module.exports = router;
