const { Character } = require("../db");

async function addAttributeToCharacters(req, res) {
    try {
        const { attribute } = req.params;
        const { value } = req.query;
        const charactersToUpdate = await Character.findAll({
            where: {
                [attribute]: null,
            },
        });
        const updatePromises = charactersToUpdate.map(async (character) => {
            await character.update({
                [attribute]: value,
            });
        });
        await Promise.all(updatePromises);

        return res.status(200).send("Personajes actualizados");
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
module.exports = addAttributeToCharacters;
