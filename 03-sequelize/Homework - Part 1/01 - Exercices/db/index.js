const { Sequelize, Op } = require('sequelize');
const modelAbility = require('./models/Ability.js');
const modelCharacter = require('./models/Character.js');
const modelRole = require('./models/Role.js');

require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const db = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/henrydatabase`,
   {
      logging: false,
   }
);

modelCharacter(db);
modelAbility(db);
modelRole(db);

module.exports = {
   ...db.models,
   db,
   Op,
};
