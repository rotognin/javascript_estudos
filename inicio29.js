//import { calcular } from 'funcoes2';
const fn2 = require('./funcoes2');

console.log(fn2.calcular(4, 3));
console.log(`Número real da função: ${fn2.numero}`);

// alterando o número
fn2.numero = 32.01;
console.log(`Número real da função: ${fn2.numero}`);

/**
 * Um mapa é um objeto com qualquer tipo de valor como índice
 * map.keys() - retorna um iterável das chaves
 * map.values() - retorna um iterável dos valores
 * map.entries() - retorna um iterável pelas entradas [chave, valor]
 */
const aluno = new Map();
aluno.set('materia', 'Cálculo 1');
aluno.set('sala', 12);
aluno.set('expectativa', 'Formação em até 3 anos');

console.log(aluno);
console.log(`
    *** Relatório:
    Matéria -> ${aluno.get('materia')}
    Sala    -> ${aluno.get('sala')}
`);

const obj = {
    funcao: "Testar as coisas",
    tempo: 6
}

console.log(Object.entries(obj));