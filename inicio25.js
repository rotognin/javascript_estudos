/**
 * SET - não permitir valores repetidos
 */

const obj = {
    idade: 38
};

const set = new Set([
    100,
    { nome: "Rodrigo" },
    "Opa é nóis",
    obj,
    true,
    10.01,
    100,          // Valor repetido, não será adicionado
    true,         // Valor repetido, também não será adicionado
    "Opa é nóis", // Mesma coisa com esse...
    { nome: "Rodrigo" }, // Porém, objeto literal ele deixa adicionar
    obj                  // Já esse objeto não deixa duplicar
]);

console.log(set);

// Funções interessantes no set:
/**
 * add - Adiciona um valor ao set
 * has - verifica se uma informação existe no set
 * delete, clear...
 * values, entries, forEach
 */

console.log(Array.from(set.values()));

// União
const conj1 = [1, [1, 2], true, 'Opa'];
const conj2 = [2, [1, 2], false, 'Opa'];

// Combina os valores dos arrays e gera um conjunto sem repetir
// Apenas o array vai ser repetido, pois ele trata como diferente, daí repete
const uniao = new Set([...conj1, ...conj2]);
console.log(uniao);

// Interseção (Apenas valores que tem nos dois conjuntos)
const conj3 = new Set([1, 100, true, 'Opa']);
const conj4 = new Set([1, 200, true, 'Opa!']);

const intersecao = new Set([...conj3].filter((valor) => {
    return conj4.has(valor);
}));

console.log(intersecao);

// Diferença
const conj5 = new Set([1, 100, true, 'Opa']);
const conj6 = new Set([1, 200, true, 'Opa!']);

const diferenca = new Set([...conj5].filter((valor) => {
    return !conj6.has(valor);
}));

console.log(diferenca);

const lista = [
    1, 2, 3, 4, 5
];

const pares = lista.filter((valor) => {
    return ((valor % 2) == 0);
});
const impares = lista.filter((valor) => {
    return ((valor % 2) != 0);
});

console.log(pares);
console.log(impares);