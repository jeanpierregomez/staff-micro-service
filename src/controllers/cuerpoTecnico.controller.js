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
    async actualizar(cuerpoTecnico) {
        const id = cuerpoTecnico.id;
        let cuerpoTecnicoVO = null;
        try {
            cuerpoTecnicoVO = await CuerpoTecnico.findByPk(id);
            cuerpoTecnicoVO = cuerpoTecnico;
            cuerpoTecnicoVO.save();
        } catch (error) {
            console.log(error);
        }
        return cuerpoTecnicoVO;
    },
    async listarPorEquipo(id_equipo) {
		let cuerposTecnicosVO = null;
		try {
			cuerposTecnicosVO = await CuerpoTecnico.findAll({where:id_equipo});
		} catch (error) {
			console.log(error);
		}
		return cuerposTecnicosVO;
	},
};
