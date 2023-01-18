const mongoose = require("mongoose");

// Define Schema
const childeSchema = new mongoose.Schema({
  name: String,
  birthDate: String,
  gender: String,
});

childeSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Childes", childeSchema);
