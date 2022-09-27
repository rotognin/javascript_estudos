/**
 * Uma forma mais simples de entender o reduce
 */

const array = [
    2, 4, 6, 8, 10
];
const soma = (a, b) => { return a + b; };
const array_soma = array.reduce(soma, 0);

console.log(`Array original: ${array}`);
console.log(`Array somada: ${array_soma}`);

console.log("--------------------------");

// Testar o reduce com array de strings

const letras = [
    'R', 'o', 'd', 'r', 'i', 'g', 'o'
];
const juntar = (l1, l2) => {
    return l1 + l2;
};

const juntada = letras.reduce(juntar, '--> ');

// Nesse caso, serão pegos cada um dos elementos do array e irá juntar com o próximo elemento
console.log(juntada);