/**
 * Testar mais funções com arrays
 * https://www.w3schools.com/jsref/jsref_obj_array.asp
 */

const funcoes = require("./funcoes");
const msg = funcoes.escrever;

const numeros = [
    'um', 'dois', 'três', 'quatro'
];

msg(numeros);

// O "every" vai retornar true se todos os elementos testados
// do array satisfizer a condição retornada pela função de callback
if (numeros.every((numero, indice) => {
    return indice < 10;
})){
    msg("Sim, existem menos que 10 elementos no array");
}

// Usando a mesma situação mas com uma função externa
function testar(numero, indice){
    return indice < 10;
}

if (numeros.every(testar)){
    msg("Sim, mais uma vez verifiquei que existem menos que 10 itens no array");
}

const informacoes = [
    1, 'um', 100, 'opa opa', 1.98
];

msg(informacoes);

function testeisNaN(info, indice){
    msg(info + ' - ' + indice);
    return isNaN(info);
}

if (informacoes.every(testeisNaN)){
    msg("Elementos passaram no teste");
} else {
    msg("--- Não passaram no teste");
}

// "if" ternário
const mensagem = (informacoes.every(testeisNaN)) ? 'Elementos passaram no teste' : 'Elementos não passaram de novo!';
msg(mensagem);