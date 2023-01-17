require("dotenv").config();
const { request, response } = require("express");
const express = require("express");
const app = express();
const Game = require("./models/mongo");

app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/api/games/", (request, response) => {
  Game.find({}).then((result) => {
    result.forEach((game) => {
      response.json(game);
    });
  });
});

app.post("/api/games/", (request, response) => {
  const game = new Game({
    name: request.body.name,
    create: request.body.create,
  });
  game.save();
  return response.json(game);
});
