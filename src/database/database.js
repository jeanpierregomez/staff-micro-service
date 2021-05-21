const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("staff-db", "root", "", {
	host: "localhost",
	dialect: "mysql",
	logging: false,
});

exports.sequelize = sequelize;

const CuerpoTecnico = require("./models/CuerpoTecnico");
const IntegranteCuerpoTecnico = require("./models/IntegranteCuerpoTecnico");
const TipoIntegranteCuerpoTecnico = require("./models/TipoIntegranteCuerpoTecnico");

(async () => {
	await sequelize.sync();
	console.log("database connected");
})();

exports.models = {
	CuerpoTecnico,
	IntegranteCuerpoTecnico,
	TipoIntegranteCuerpoTecnico,
};
