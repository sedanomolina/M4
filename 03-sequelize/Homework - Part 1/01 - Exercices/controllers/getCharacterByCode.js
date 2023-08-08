const { Character } = require("../db");

async function getCharacterByCode(req, res) {
    try {
        const { code } = req.params;
        const character = await Character.findByPk(code);
        if (!character)
            return res
                .status(404)
                .send(
                    "El código FIFTH no corresponde a un personaje existente"
                );

        return res.status(200).json(character);
    } catch {
        return res
            .status(404)
            .send("El código FIFTH no corresponde a un personaje existente");
    }
}
module.exports = getCharacterByCode;
