const router = require("express").Router();
const integranteCuerpoTecnicoService = require("../services/integranteCuerpoTecnico.service");

router.route("/guardar").post(integranteCuerpoTecnicoService.agregar);
router.route("/actualizar").put(integranteCuerpoTecnicoService.actualizar);
router
	.route("/listar_por_cuerpo_tecnico/:id_cuerpo")
	.get(integranteCuerpoTecnicoService.listarPorCuerpo);
router.route("/listar/:id").get(integranteCuerpoTecnicoService.getPorId);
router.route("/eliminar/:id").delete(integranteCuerpoTecnicoService.eliminar);

module.exports = router;
