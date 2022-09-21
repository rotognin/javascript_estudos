const funcao = require("./funcoes");

const lista = [
    { aula: "Português", tempo: 2 },
    { aula: "Inglês", tempo: 3 },
    { aula: "Matemática", tempo: 4 }
];

const primos = [1, 2, 3, 5, 7, 11, 13, 17, 19];

//console.log(lista[0].tempo);

function imprimir(aula, tempo){
    //console.log("Aula de: " + aula);
    setTimeout(() => {
        console.log("Aula: " + aula + ' - Tempo: ' + tempo + " horas");
    }, tempo * 1000);
}

for (idx = 0; idx < lista.length; idx++){
    imprimir(lista[idx].aula, lista[idx].tempo);
}

funcao.escrever(typeof(lista));

// O .forEach executa a função para cada elemento da função, não retorna nada
primos.forEach((valor, indice, numeros) => {
    console.log("Valor: " + valor + " - Índice: " + indice);
});

// A função .map retorna um array novo com a execução da função para cada elemento do array
primos_dobro = primos.map((numero) => {
    return numero * 2;
});

console.log(primos_dobro);