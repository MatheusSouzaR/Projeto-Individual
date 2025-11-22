var express = require("express");
var router = express.Router();

var buildController = require("../controllers/buildController");

router.post("/cadastrarBuild", function (req, res) {
    buildController.cadastrarBuild(req, res);
});

module.exports = router;