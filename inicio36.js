/**
 * Criando um array de funções
 */

function fn1(num){
    let numero = num * 5;
    return numero;
}

function fn2(num){
    let numero = num / 10;
    return numero;
}

// Criando um array e colocando as duas funções dentro!
const fn_array = [
    fn1, fn2
];

const numero1 = fn_array[0](5);
const numero2 = fn_array[1](4);

console.log(`Que doido! Olha o resultado: ${numero1} e ${numero2}`);
