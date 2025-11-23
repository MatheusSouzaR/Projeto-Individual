var database = require("../database/config")

function buscarUltimasBuild(classeBuscada, limite_linhas) {

    var instrucaoSql = `SELECT
        forca, destreza, inteligencia, fe, arcano
        FROM build WHERE nome = '${classeBuscada}'
                    ORDER BY nome DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasClasses() {

    var instrucaoSql = `SELECT classe, count(classe) as totalClasse
        FROM build 
        group by classe`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarClasse(fkUsuario) {

    var instrucaoSql = `SELECT nome, classe FROM build WHERE fkUsuario = ${fkUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mostrarClasse(fkUsuario, nome) {

    var instrucaoSql = `SELECT classe, nivel FROM build WHERE nome = '${nome}' AND fkUsuario = ${fkUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasBuild,
    buscarUltimasClasses,
    pesquisarClasse,
    mostrarClasse
};