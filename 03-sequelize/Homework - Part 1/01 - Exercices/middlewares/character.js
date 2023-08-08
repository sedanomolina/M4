const { Router, query } = require("express");
const { Op, Character, Role } = require("../db");
const createCharacter = require("../controllers/createCharacter");
const findAllCharacters = require("../controllers/findAllCharacters");
const getCharacterByCode = require("../controllers/getCharacterByCode");
const addAttributeToCharacters = require("../controllers/addAttributeToCharacters");
const router = Router();

router.post("/", createCharacter);

router.get("/", findAllCharacters);

router.get("/:code", getCharacterByCode);

router.put("/:attribute", addAttributeToCharacters);

module.exports = router;
