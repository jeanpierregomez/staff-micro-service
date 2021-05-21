const router = require("express").Router();
const cuerpoTecnicoRouter = require("./cuerpoTecnico.routes");
const integranteCuerpoTecnicoRouter = require("./integranteCuerpoTecnico.routes");
const tipoIntegranteRouter = require("./tipoIntegrante.routes");

router.use("/cuerpo_tecnico", cuerpoTecnicoRouter);
router.use("/integrante_cuerpo_tecnico", integranteCuerpoTecnicoRouter);
router.use("/tipo_integrante", tipoIntegranteRouter);
router.use("/*", (req, res) => res.status(404).json({ error: "Not found" }));

module.exports = router;
