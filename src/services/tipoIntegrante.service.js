const { tipoIntegranteController } = require("../controllers/index.controller");

module.exports = {
	async agregar(req, res) {
		const data = req.body;
		const tipoIntegrante = await tipoIntegranteController.guardar(data);
		if (tipoIntegrante) {
			return res.status(200).json(tipoIntegrante);
		} else {
			res.status(500).json({ error: "Ha ocurrido un error interno" });
		}
	},
	async getPorId(req, res) {
		const id = req.params.id;
		const tipoIntegrante = await tipoIntegranteController.getPorId(id);
		if (tipoIntegrante) {
			return res.status(200).json(tipoIntegrante);
		} else {
			res
				.status(404)
				.json({ error: "No se ha encontrado el tipo de integrante" });
		}
	},
	async actualizar(req, res) {
		const data = req.body;
		const tipoIntegrante = await tipoIntegranteController.actualizar(data);
		if (tipoIntegrante) {
			return res.status(200).json(tipoIntegrante);
		} else {
			res.status(500).json({ error: "Ha ocurrido un error interno" });
		}
	},
	async eliminar(req, res) {
		const id = req.params.id;
		const tipoIntegrante = await tipoIntegranteController.eliminar(id);
		if (tipoIntegrante) {
			return res
				.status(200)
				.json({ ok: "Tipo de integrante borrado correctamente" });
		} else {
			return res.status(404).json({ error: "Nada qué eliminar :)" });
		}
	},
	async listar(req, res) {
		const listaTipoIntegrante = await tipoIntegranteController.listar();
		if (listaTipoIntegrante) {
			return res.status(200).json(listaTipoIntegrante);
		} else {
			res.status(500).json({ error: "Ha ocurrido un error interno" });
		}
	},
};
