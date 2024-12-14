const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/config.js");

const chamadaDeManutencaoModel = sequelize.define("ChamadaDeManutencao", {
    id_manutencao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tipoDeManutencao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    regiaoCliente: { 
        type: DataTypes.STRING,
        allowNull: true,
    },

    dataManutencao: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    reagendamentoManutencao: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    pagamentoManutencao: {
        type: DataTypes.DECIMAL(10, 2) // Tipo correto para decimal
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Cliente",
            key: "id_cliente"
        }
    },
    id_equipeManu: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "EquipesDeManutencao",
            key: "id_equipesDeManutencao"
        }
    }
}, {
    tableName: "ChamadaDeManutencao",
    timestamps: false
});

module.exports = chamadaDeManutencaoModel;
