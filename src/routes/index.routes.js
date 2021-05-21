const router = require("express").Router();
const cuerpoTecnicoRouter = require("./cuerpoTecnico.routes");

router.use("/cuerpo_tecnico", cuerpoTecnicoRouter);

module.exports = router;
