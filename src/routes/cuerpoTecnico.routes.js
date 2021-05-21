const router = require("express").Router();
const cuerpoTecnicoService = require("../services/cuerpoTecnico.service");

router.route("/guardar").post(cuerpoTecnicoService.agregar);
router.route("/guardar").put(cuerpoTecnicoService.actualizar);
router
	.route("/listar_por_equipo/:id_equipo")
	.get(cuerpoTecnicoService.listarPorEquipo);

module.exports = router;
