const router = require("express").Router();
const integranteCuerpoTecnicoService = require("../services/IntegranteCuerpoTecnico.service");

router.route("/guardar").post(integranteCuerpoTecnicoService.agregar);
router.route("/actualizar").put(integranteCuerpoTecnicoService.actualizar);
router
	.route("/listar_por_cuerpo_tecnico/:id_cuerpo")
	.get(integranteCuerpoTecnicoService.listarPorCuerpo);
module.exports = router;
