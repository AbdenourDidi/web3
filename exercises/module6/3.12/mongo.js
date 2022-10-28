const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];
const name = process.argv[3];
const num = process.argv[4];

const url = `mongodb+srv://abdenour:${password}@cluster0.887mdki.mongodb.net/?retryWrites=true&w=majority`;

const personSchema = new mongoose.Schema({
  name: String,
  num: String,
});

const Person = mongoose.model("Person", personSchema);

mongoose
  .connect(url)

  .then((result) => {
    console.log("connected");
    if (name != undefined && num != undefined) {
      const person = new Person({
        name: name,
        num: num,
      });
      return person.save().then(() => {
        console.log("person saved!");
      });
    }
  })
  .then(
    Person.find({}).then((result) => {
      mongoose.connection.close();
      result.forEach((person) => {
        console.log(person);
      });
    })
  )
  .catch((err) => console.log(err));
