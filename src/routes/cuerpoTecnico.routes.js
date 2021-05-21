const router = require("express").Router();
const cuerpoTecnicoService = require("../services/cuerpoTecnico.service");

router.route("/guardar").post(cuerpoTecnicoService.agregar);

module.exports = router;
