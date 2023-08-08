const express = require("express");
const characterMiddleware = require("./middlewares/character.js"); //(router)
// const abilityMiddleware = require("./middlewares/ability.js");

const server = express();

server.use(express.json());

server.use("/character", characterMiddleware); //(router)

// server.use("/ability", abilityMiddleware);

server.get("/", (req, res) => {
    return res.send("Henry Sequelize Homework");
});

module.exports = server;
