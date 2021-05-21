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
            for (const key in cuerpoTecnico) {
                cuerpoTecnicoVO[key] = cuerpoTecnico[key];
            }
            cuerpoTecnicoVO.save();
        } catch (error) {
            console.log(error);
        }
        return cuerpoTecnicoVO;
    },
    async listarPorEquipo(id_equipo) {
        let listaCuerpoTecnico = null;
        try {
            listaCuerpoTecnico = await CuerpoTecnico.findAll({
                where: { id_equipo },
            });
        } catch (error) {
            console.log(error);
        }
        return listaCuerpoTecnico;
    },
    async finalizarVigencia(id) {
        let cuerpoTecnicoVO = null;
        try {
            cuerpoTecnicoVO = await CuerpoTecnico.findByPk(id);
            cuerpoTecnicoVO.estado = false;
            cuerpoTecnicoVO.finiquitacion = new Date();
            cuerpoTecnicoVO.save();
        } catch (error) {
            console.log(error);
        }
        return cuerpoTecnicoVO;
    },
};
