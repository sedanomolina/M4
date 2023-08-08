const { Router, query } = require("express");
const { Op, Character, Role } = require("../db");

async function createCharacter({ code, name, age, race, hp, mana }) {
    if (!code && !name && !age && !race && !hp && !mana)
        throw new Error("Falta enviar datos obligatorios");
    try {
        const newCharacter = await Character.create({
            code,
            name,
            age,
            race,
            hp,
            mana,
        });

        return newCharacter;
    } catch {
        throw new Error("Error en alguno de los datos provistos");
    }
}

async function findAllCharacters(query) {
    const { race, age } = query;
    let queries = {};
    if (race !== undefined) queries.race = race;
    if (age !== undefined) queries.age = age;

    let characters = await Character.findAll({
        where: queries,
    });
    return characters;
}

async function findCharacterByCode(code) {
    try {
        const character = await Character.findByPk(code);
        if (!character)
            throw new Error(
                "El código FIFTH no corresponde a un personaje existente"
            );
        return character;
    } catch {
        throw new Error(
            "El código FIFTH no corresponde a un personaje existente"
        );
    }
}

async function addAgeToCharacters(attribute, value) {
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

    return charactersToUpdate;
}

const router = Router();

module.exports = {
    router,
    createCharacter,
    findAllCharacters,
    findCharacterByCode,
    addAgeToCharacters,
};
