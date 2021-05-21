const { cuerpoTecnicoController } = require("../controllers/index.controller");

module.exports = {
	async agregar(req, res) {
		const data = req.body;
		data.fecha_contratacion = new Date(data.fecha_contratacion);
		data.terminacion_contrato = new Date(data.terminacion_contrato);
		const cuerpoTecnico = await cuerpoTecnicoController.guardar(data);
		if (cuerpoTecnico) {
			return res.status(200).json(cuerpoTecnico);
		} else {
			res.status(500).json({ error: "Ha ocurrido un error interno" });
		}
	},
	async actualizar(req, res) {
		const data = req.body;
		data.fecha_contratacion = new Date(data.fecha_contratacion);
		data.terminacion_contrato = new Date(data.terminacion_contrato);
		const cuerpoTecnico = await cuerpoTecnicoController.actualizar(data);
		if (cuerpoTecnico) {
			return res.status(200).json(cuerpoTecnico);
		} else {
			res.status(500).json({ error: "Ha ocurrido un error interno" });
		}
	},
	async listarPorEquipo(req, res) {
		const id_equipo = req.params.id_equipo;
		const listaCuerpoTecnico = await cuerpoTecnicoController.listarPorEquipo(
			id_equipo
		);
		if (listaCuerpoTecnico) {
			return res.status(200).json(listaCuerpoTecnico);
		} else {
			res.status(500).json({ error: "Ha ocurrido un error interno" });
		}
	},
	async finalizarVigencia(){
		const id = req.params.id;
		const cuerpoTecnico = await cuerpoTecnicoController.finalizarVigencia(id);
		if (cuerpoTecnico) {
			return res.status(200).json(cuerpoTecnico);
		} else {
			res.status(500).json({ error: "Ha ocurrido un error interno" });
		}
	}
};
