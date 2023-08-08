const { Character } = require("../db");

async function createCharacter(req, res) {
    const { code, name, age, race, hp, mana } = req.body;

    if (!code && !name && !age && !race && !hp && !mana)
        return res.status(404).send("Falta enviar datos obligatorios");
    try {
        const newCharacter = await Character.create({
            code,
            name,
            age,
            race,
            hp,
            mana,
        });

        return res.status(201).json(newCharacter);
    } catch {
        return res.status(404).send("Error en alguno de los datos provistos");
    }
}

module.exports = createCharacter;
