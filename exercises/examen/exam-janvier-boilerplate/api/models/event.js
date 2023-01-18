const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

// Define Schema
const eventSchema = new mongoose.Schema({
  name: String,
  date: String,
  child: ObjectId,
});

eventSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Events", eventSchema);
