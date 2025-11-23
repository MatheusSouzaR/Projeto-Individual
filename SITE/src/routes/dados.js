var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.get("/pegarDados/:classeBuscada", function (req, res) {
    dadosController.buscarUltimasBuild(req, res);
})

router.get("/pegarClasses", function (req, res) {
    dadosController.buscarUltimasClasses(req, res);
})

router.get("/pesquisarClasse/:fkUsuario", function (req, res) {
    dadosController.pesquisarClasse(req, res);
})

router.get("/mostrarClasse/:fkUsuario/:nome", function (req, res) {
    dadosController.mostrarClasse(req, res);
});

module.exports = router;