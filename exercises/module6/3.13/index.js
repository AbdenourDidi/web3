require("dotenv").config();
const { request, response } = require("express");
const express = require("express");
const app = express();
const Person = require("./models/person");

// Data. This emulates a datastore
const allPersons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada lovelace",
    number: "39-44-5232323",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-2345345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-64234122",
  },
];

app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/api/persons/", (request, response) => {
  Person.find({}).then((result) => {
    result.forEach((person) => {
      response.json(person);
    });
  });
});
