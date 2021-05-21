const { CuerpoTecnico } = require("../database/database").models;

module.exports = {
	async guardar(cuerpoTecnico) {
		let cuerpoTecnicoVO = null;
		try {
			cuerpoTecnicoVO = await CuerpoTecnico.create(cuerpoTecnico);
		} catch (error) {
			console.log(error);
		}
		return cuerpoTecnicoVO;
	},
};
