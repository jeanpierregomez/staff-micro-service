const { IntegranteCuerpoTecnico } = require("../database/database").models;

module.exports = {
	async guardar(integrante) {
		let integranteVO = null;
		try {
			integranteVO = await IntegranteCuerpoTecnico.create(integrante);
		} catch (error) {
			console.log(error);
		}
		return integranteVO;
	},
	async actualizar(integrante) {
		const id = integrante.id;
		let integranteVO = null;
		try {
			integranteVO = await IntegranteCuerpoTecnico.findByPk(id);
			for (const key in integrante) {
				integranteVO[key] = integrante[key];
			}
			integranteVO.save();
		} catch (error) {
			console.log(error);
		}
		return integranteVO;
	},
	async listarPorCuerpo(id_cuerpo_tecnico) {
		let listaIntegrante = null;
		try {
			listaIntegrante = await IntegranteCuerpoTecnico.findAll({
				where: { id_cuerpo_tecnico },
			});
		} catch (error) {
			console.log(error);
		}
		return listaIntegrante;
	},
};
