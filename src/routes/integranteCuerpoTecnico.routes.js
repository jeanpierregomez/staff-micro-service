const router = require("express").Router();
const integranteCuerpoTecnicoService = require("../services/IntegranteCuerpoTecnico.service");

router.route("/guardar").post(integranteCuerpoTecnicoService.agregar);
router.route("/actualizar").put(integranteCuerpoTecnicoService.actualizar);

module.exports = router;
