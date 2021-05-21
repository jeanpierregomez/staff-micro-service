const { DataTypes, QueryTypes } = require("sequelize");
const { sequelize } = require("../database");
const TipoIntegranteCuerpoTecnico = require("./TipoIntegranteCuerpoTecnico");

const IntegranteCuerpoTecnico = sequelize.define(
	"integrante_cuerpo_tecnico",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nombres: {
			type: DataTypes.STRING(40),
			allowNull: false,
		},
		apellidos: {
			type: DataTypes.STRING(40),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(60),
			allowNull: false,
		},
		telefono: {
			type: DataTypes.STRING(15),
			allowNull: true,
		},
		celular: {
			type: DataTypes.STRING(15),
			allowNull: true,
		},
		fecha_nacimiento: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
		tipo_sangre: {
			type: DataTypes.STRING(3),
			allowNull: false,
		},
		id_tipo: {
			type: DataTypes.INTEGER,
			references: {
				model: TipoIntegranteCuerpoTecnico,
				key: "id",
			},
		},
	},
	{
		freezeTableName: true,
		timestamps: true,
	}
);

module.exports = IntegranteCuerpoTecnico;
