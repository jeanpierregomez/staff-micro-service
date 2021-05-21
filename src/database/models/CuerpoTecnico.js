const { DataTypes, QueryTypes } = require("sequelize");
const { sequelize } = require("../database");

const CuerpoTecnico = sequelize.define(
	"cuerpo_tecnico",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nombre: {
			type: DataTypes.STRING(200),
			allowNull: false,
		},
		fecha_contratacion: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		terminacion_contrato: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		id_equipo: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		estado: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true,
		},
		finiquitacion: {
			type: DataTypes.DATEONLY,
			allowNull: true,
		},
	},
	{
		freezeTableName: true,
		timestamps: true,
	}
);

module.exports = CuerpoTecnico;
