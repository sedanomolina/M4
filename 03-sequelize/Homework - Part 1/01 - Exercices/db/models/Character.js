const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Character",
        {
            code: {
                type: DataTypes.STRING,
                primaryKey: true,
                validate: {
                    len: {
                        args: [1, 5],
                        msg: "El campo debe tener entre 1 y 5 caracteres.",
                    },
                    customValidation(value) {
                        if (value.toLowerCase() === "henry") {
                            throw new Error(
                                'El nombre no puede ser "HENRY" o variaciones de mayúsculas y minúsculas.'
                            );
                        }
                    },
                },
            },
            name: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    notIn: {
                        args: [["Henry", "SoyHenry", "Soy Henry"]],
                        msg: "El nombre no puede ser Henry, SoyHenry o Soy Henry.",
                    },
                },
            },
            age: {
                type: DataTypes.INTEGER,
            },
            race: {
                type: DataTypes.ENUM,
                values: ["Human", "Elf", "Machine", "Demon", "Animal", "Other"],
                defaultValue: "Other",
            },
            hp: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            mana: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    );
};
