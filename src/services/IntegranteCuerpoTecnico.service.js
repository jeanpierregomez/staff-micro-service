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
};
