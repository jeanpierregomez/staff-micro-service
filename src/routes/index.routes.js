const router = require("express").Router();
const cuerpoTecnicoRouter = require("./cuerpoTecnico.routes");
const integranteCuerpoTecnicoRouter = require("./integranteCuerpoTecnico.routes");

router.use("/cuerpo_tecnico", cuerpoTecnicoRouter);
router.use("/integrante_cuerpo_tecnico", integranteCuerpoTecnicoRouter);
router.use("/*", (req, res) => res.status(404).json({ error: "Not found" }));

module.exports = router;
