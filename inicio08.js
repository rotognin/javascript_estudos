const funcao = require("./funcoes");

let nome = 'Rodrigo';

// Encadeando retornos corretos. Ao dar um "return" em um .then,
// ele irá chamar o próximo .then com o parâmetro setado.
funcao.checarNome(nome)
    .then((msg) => {
        console.log(msg);
        return("OK, retornou certinho!");
    })
    .then((aviso) => {
        console.log(aviso);
    })
    .catch((msg) => {
        console.log("Opa... retorno: " + msg);
    });