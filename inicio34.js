/**
 * Promise executor
 * Eu vou criar um executor e passar pa criação de uma nova promessa
 * esse executor
 * 
 * *** Importante: assim que a Promessa é instanciada, ela já começa
 * a ser executada, mesmo que a sua resolução nunca seja solicitada com o .then()
 */

console.time('tempo');
console.time('funcoes');

// Esse é o executor. Eu criei ele e posso passar para uma ou várias
// promessas
const executor = (resolve, reject) => {
    setTimeout(() => {
        console.log("--- Teste ---");
        resolve(`=> Sim, acabei de resolver aqui`);
    }, 1000);
};

const promessa = new Promise(executor);
promessa.then((msg) => {
    console.log(`1 => ${msg}`);
});

const outraPromessa = new Promise(executor);
outraPromessa.then((msg) => {
    console.log("Essa é a segunda promessa.....");
    console.log(`2 - ${msg}`);
    console.timeEnd('funcoes');
});

const maisUma = new Promise(executor);
console.log(maisUma); // retorna um objeto de Promessa que está pendente para ser resolvida
maisUma.then((msg) => {
    console.log(maisUma); // retorna uma promessa já resolvida com a resolução nela
});

// Esse tempo irá executar antes de todos, enquanto as funções
// são resolvidas depois de passar por aqui
console.timeEnd('tempo');