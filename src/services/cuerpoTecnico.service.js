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
};
