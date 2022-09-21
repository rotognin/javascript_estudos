// Toda função assíncrona retorna uma Promise
async function imprimir(){
    const nome = "Rodrigo Tognin";
    return "O rapaz se chama " + nome;
}

// Mas é possível criar uma função que retorne uma Promise, com
// a possibilidade de resolver ou rejeitar, dependedndo das regras
// de negócio
function relatorio(numero = 0){
    return new Promise((resolve, reject) => {
        if (numero == 1) {
            resolve(`
                O relatório poderá ser impresso corretamente!
            `);
        } else {
            reject("O relatório não podeerá ser impresso!");
        }
    });
}

imprimir().then((msg) => {
    console.log(msg);
    return "Agora sim eu imprimi a mensagem corretamente!";
}).then((msg) => {
    console.log(msg);
});

console.log("Aguarde...");

relatorio().then().catch(
    (msg) => {
        console.log("Mensagem de retorno do relatório: " + msg)
    }
);

relatorio(1).then(
    (msg) => {
        console.log("Agora sim o valor correto foi passado ao relatório. \n Retorno: " + msg);
    }
);