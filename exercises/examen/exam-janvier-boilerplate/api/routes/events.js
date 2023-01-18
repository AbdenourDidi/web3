const router = require("express").Router();
const Event = require("../models/event");

router.get("/", (req, res, next) => {
  Event.find({})
    .then((events) => res.json(events))
    .catch((err) => next(err));
});

// Find by ID
router.get("/:id", (req, res, next) => {
  Event.findById(req.params.id)
    .then((event) => {
      if (event) {
        res.json(event);
      }
    })
    .catch((err) => next(err));
});

// Delete one
router.delete("/:id", (req, res, next) => {
  Event.findByIdAndRemove(req.params.id)
    .then((result) => {
      if (result) {
        res.json(result);
      }
    })
    .catch((err) => next(err));
});

// Insert one
router.post("/", (req, res, next) => {
  const body = req.body;
  // Check body
  const errorMessages = [];
  if (!body.name) errorMessages.push("name must be present");
  if (!body.date) errorMessages.push("date must be present");
  if (errorMessages.length > 0) {
    res.status(422).json({ errorMessages });
    return;
  }
  // Check existing

  const event = new Event(body);
  event
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => next(err));
});

module.exports = router;
