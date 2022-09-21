async function teste(idade) {
    console.log("Dentro da função");
    return "Rodrigo Tognin, " + idade + " anos";
}

console.log("Antes de chamar a função");
var idade = 38;

teste(idade).then((retorno) => {
    console.log(retorno);
});

let x1 = 12;
var x2 = 21;

function executar(){
    console.log("x1 = ", x1);
    console.log("x2 = ", x2);
}

executar();

function tempo(mensagem){
    nome = "Função com tempo";

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("após 2 segundos, a mensagem: " + mensagem + " - " + nome);
        }, 2000);
        resolve("Resolveu!");
    });
}

tempo("Vamos resolver isso!!!").then(() => {
    console.log("Finalmente!");
});