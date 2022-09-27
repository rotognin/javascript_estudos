/**
 * Testar funções assíncronas na base do node
 * *** Para que isso funcione, devemos informar no package.json
 * a informação de usar os módulos do ES6
 * "type": "module"
 */

function somar(a, b){
    return new Promise((resolve, reject) => {
        resolve(a + b);
    });
}

// Esse await funciona, desde que eu esteja na base do script
// Não será necessário criar um escopo assíncrono
const soma = await somar(40, 63);
console.log(soma);
