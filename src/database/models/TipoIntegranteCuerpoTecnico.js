const { DataTypes, QueryTypes } = require("sequelize");
const { sequelize } = require("../database");

const IntegranteCuerpoTecnico = sequelize.define(
	"tipo_integrante_cuerpo_tecnico",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nombre: {
			type: DataTypes.STRING(60),
			allowNull: false,
		},
		descripcion: {
			type: DataTypes.STRING(250),
			allowNull: false,
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

module.exports = IntegranteCuerpoTecnico;
