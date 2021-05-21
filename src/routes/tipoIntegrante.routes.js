const router = require("express").Router();
const tipoIntegranteService = require("../services/tipoIntegrante.service");

router.route("/guardar").post(tipoIntegranteService.agregar);
router.route("/actualizar").put(tipoIntegranteService.actualizar);
router.route("/listar/:id").get(tipoIntegranteService.getPorId);
router.route("/eliminar/:id").delete(tipoIntegranteService.eliminar);
router.route("/listar").get(tipoIntegranteService.listar);

module.exports = router;
