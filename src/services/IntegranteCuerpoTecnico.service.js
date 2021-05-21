const {
	integranteCuerpoTecnicoController,
} = require("../controllers/index.controller");
const {
	listarPorCuerpo,
} = require("../controllers/integranteCuerpoTecnico.controller");

module.exports = {
	async agregar(req, res) {
		const data = req.body;
		data.fecha_nacimiento = new Date(data.fecha_nacimiento);
		const integrante = await integranteCuerpoTecnicoController.guardar(data);
		if (integrante) {
			return res.status(200).json(integrante);
		} else {
			res.status(500).json({ error: "Ha ocurrido un error interno" });
		}
	},
	async actualizar(req, res) {
		const data = req.body;
		data.fecha_nacimiento = new Date(data.fecha_nacimiento);
		const integrante = await integranteCuerpoTecnicoController.actualizar(data);
		if (integrante) {
			return res.status(200).json(integrante);
		} else {
			res.status(500).json({ error: "Ha ocurrido un error interno" });
		}
	},
	async listarPorCuerpo(req, res) {
		const id_cuerpo = req.params.id_cuerpo;
		const listaIntegrante =
			await integranteCuerpoTecnicoController.listarPorCuerpo(id_cuerpo);
		if (listaIntegrante) {
			return res.status(200).json(listaIntegrante);
		} else {
			res.status(500).json({ error: "Ha ocurrido un error interno" });
		}
	},
	async getPorId(req, res) {
		const id = req.params.id;
		const integrante = await integranteCuerpoTecnicoController.getPorId(id);
		if (integrante) {
			return res.status(200).json(integrante);
		} else {
			res.status(404).json({ error: "No se ha encontrado el integrante" });
		}
	},
	async eliminar(req, res) {
		const id = req.params.id;
		const integrante = await integranteCuerpoTecnicoController.eliminar(id);
		if (integrante) {
			return res.status(200).json({ ok: "Integrante borrado correctamente" });
		} else {
			return res.status(404).json({ error: "Nada qué eliminar :)" });
		}
	},
};
