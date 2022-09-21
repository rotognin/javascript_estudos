// Testando spread operator para arrays e objetos
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const array3 = [...array1, ...array2];

console.log(array3);

const infosBasicas = {
    cor: "Branco",
    tamanho: 2
};

const infosAdicionais = {
    peso: 4,
    local: "Prateleira 1"
};

const infosTotais = {
    ...infosBasicas,
    ...infosAdicionais
};

console.log(infosTotais);

// Testar funções sem argumentos recebendo argumentos!
function argumentos(){
    console.log(arguments);
    console.log(arguments['0']); // retorna 'undefined' caso não tenha argumentos

    // Mesmo que esteja varia, a variável 'arguments' é um objeto
    console.log("Tipo da variável 'arguments': " + typeof(arguments));

    if (arguments.length > 0){
        console.log(`Foram passados ${arguments.length} argumentos para a função!`);
    } else {
        console.log("Nenhum argumento passado para a função.");
    }
}

argumentos(123, 321);
argumentos();

function exibir(){
    if (arguments.length == 0){
        return;
    }

    console.log("Tipo passado: " + typeof(arguments[0]));

    // Na verdade o array é detectado como um objeto. Essa verificação abaixo
    // não vai funcionar!
    if (typeof(arguments[0]) === 'array'){
        console.log("Foi passado um array para a função!");
    }

    // Para saber se foi passado um array de verdade:
    if (Array.isArray(arguments[0])){
        console.log("Agora sim foi detectado um array!");
    }


    if (typeof(arguments[0]) === 'object'){
        console.log("Opa, agora foi passado um objeto para a função! (mas pode ser um array!)");
    }

    console.log(arguments[0]);
}

exibir("Opa, exibindo essa mensagem em uma função sem parâmetros!");
exibir([1, 2, 3]); // Passado um array para a função
exibir({texto: "Eu sei que mando bala", tecnologia: "Javascript"});