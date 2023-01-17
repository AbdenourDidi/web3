require("dotenv").config();
const { request, response } = require("express");
const express = require("express");
const app = express();
const People = require("./models/mongo");

app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/api/peoples/", (request, response) => {
  People.find({}).then((result) => {
    result.forEach((people) => {
      response.json(people);
    });
  });
});

app.post("/api/peoples/", (request, response) => {
  const people = new People({
    name: request.body.name,
    num: request.body.num,
  });
  people.save();
  return response.json(people);
});
