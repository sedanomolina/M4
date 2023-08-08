const { Character } = require("../db");

async function findAllCharacters(req, res) {
    try {
        const { race, age } = req.query;
        let queries = {};
        if (race !== undefined) queries.race = race;
        if (age !== undefined) queries.age = age;

        let characters = await Character.findAll({
            where: queries,
        });
        return res.status(200).json(characters);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
module.exports = findAllCharacters;
