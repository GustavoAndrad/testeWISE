const express = require("express")
const router = express.Router()
const listaController = require("./controllers/listaControllers")

router.get("/lista", listaController.verTudo)

module.exports = router