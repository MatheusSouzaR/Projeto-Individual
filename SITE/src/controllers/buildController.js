var buildModels = require("../models/buildModels");

function cadastrarBuild(req, res) {
    var nome = req.body.nomeServer;
    var classe = req.body.classeServer;
    var nivel = req.body.nivelServer;
    var vigor = req.body.vigorServer;
    var Mana = req.body.ManaServer;
    var Res = req.body.ResServer;
    var Forca = req.body.ForcaServer;
    var Dex = req.body.DexServer;
    var Int = req.body.IntServer;
    var Fe = req.body.FeServer;
    var Arc = req.body.ArcServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        buildModels.cadastrarBuild(nome, classe, nivel, vigor, Mana, Res, Forca, Dex, Int, Fe, Arc, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao entrar no controller! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrarBuild
};