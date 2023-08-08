const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Ability",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
            },
            mana_cost: {
                type: DataTypes.FLOAT,
                allowNull: false,
                validate: {
                    min: {
                        args: [10.0],
                        msg: "El costo del maná debe ser como mínimo 10.0",
                    },
                    max: {
                        args: [250.0],
                        msg: "El costo de maná debe ser como máximo 250.0",
                    },
                },
            },
        },
        {
            indexes: [
                {
                    unique: true,
                    fields: ["name", "mana_cost"],
                    name: "compositeIndex",
                },
            ],
        }
    );
};
