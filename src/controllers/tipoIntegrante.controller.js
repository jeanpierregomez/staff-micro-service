const { TipoIntegranteCuerpoTecnico } = require("../database/database").models;

module.exports = {
    async guardar(tipoIntegrante) {
        let tipoIntegranteVO = null;
        try {
            tipoIntegranteVO = await TipoIntegranteCuerpoTecnico.create(tipoIntegrante);
        } catch (error) {
            console.log(error);
        }
        return tipoIntegranteVO;
    },
    async getPorId(id){
        let tipoIntegranteVO = null;
        try {
            tipoIntegranteVO = await TipoIntegranteCuerpoTecnico.findByPk(id);
        } catch (error) {
            console.log(error);
        }
        return tipoIntegranteVO;
    },
    async actualizar(tipoIntegrante) {
        const id = tipoIntegrante.id;
        let tipoIntegranteVO = null;
        try {
            tipoIntegranteVO = await TipoIntegranteCuerpoTecnico.findByPk(id);
            for (const key in tipoIntegrante) {
                tipoIntegranteVO[key] = tipoIntegrante[key];
            }
            tipoIntegranteVO.save();
        } catch (error) {
            console.log(error);
        }
        return tipoIntegranteVO;
    },
    async eliminar(id) {
        let tipoIntegranteVO = null;
        try {
            tipoIntegranteVO = await TipoIntegranteCuerpoTecnico.findByPk(id);
            if (tipoIntegranteVO) {
                tipoIntegranteVO.destroy();
            }
        } catch (error) {
            console.log(error);
        }
        return tipoIntegranteVO;
    },
    async listar() {
        let listaTipoIntegrante = null;
        try {
            listaTipoIntegrante = await TipoIntegranteCuerpoTecnico.findAll();
        } catch (error) {
            console.log(error);
        }
        return listaTipoIntegrante;
    },
};