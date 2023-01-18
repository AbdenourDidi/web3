const router = require("express").Router();
const Childe = require("../models/childe");

router.get("/", (req, res, next) => {
  Childe.find({})
    .then((childes) => res.json(childes))
    .catch((err) => next(err));
});

// Find by ID
router.get("/:id", (req, res, next) => {
  Childe.findById(req.params.id)
    .then((childe) => {
      if (childe) {
        res.json(childe);
      }
    })
    .catch((err) => next(err));
});

// Delete one
router.delete("/:id", (req, res, next) => {
  Childe.findByIdAndRemove(req.params.id)
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
  if (!body.birthDate) errorMessages.push("birthDate must be present");
  if (!body.name.length < 3)
    errorMessages.push("name caractere must be present");
  if (errorMessages.length > 0) {
    res.status(422).json({ errorMessages });
    return;
  }
  // Insert
  const childe = new Childe(body);
  childe
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => next(err));
});

module.exports = router;
