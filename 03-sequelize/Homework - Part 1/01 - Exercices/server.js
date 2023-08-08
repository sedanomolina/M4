const express = require("express");
const {
    router,
    createCharacter,
    findAllCharacters,
    findCharacterByCode,
    addAgeToCharacters,
} = require("./middlewares/character.js");
// const abilityMiddleware = require("./middlewares/ability.js");

const server = express();

server.use(express.json());

server.use("/character", router);
// server.use("/ability", abilityMiddleware);

server.get("/", (req, res) => {
    return res.send("Henry Sequelize Homework");
});

server.post("/character", async (req, res) => {
    const abilities = req.body;
    try {
        const newCharacter = await createCharacter(abilities);
        return res.status(201).json(newCharacter);
    } catch (error) {
        return res.status(404).send(error.message);
    }
});

server.get("/character", async (req, res) => {
    const queries = req.query;
    try {
        const characters = await findAllCharacters(queries);
        return res.status(200).json(characters);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

server.get("/character/:code", async (req, res) => {
    try {
        const { code } = req.params;
        const character = await findCharacterByCode(code);
        return res.status(200).json(character);
    } catch (error) {
        return res.status(404).send(error.message);
    }
});

server.put("/character/:attribute", async (req, res) => {
    try {
        const { attribute } = req.params;
        const { value } = req.query;
        await addAgeToCharacters(attribute, value);
        return res.status(200).send("Personajes actualizados");
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

module.exports = server;
