/**
 * Estudos sobre arrays de objetos
 * Percorrer os objetos, procurar informações, etc...
 */

const objArray = [
    { id: 1, nome: 'Rodrigo Tognin', idade: 39, peso: 107.45 },
    { id: 2, nome: 'Renato da Silva', idade: 21, peso: 87.40 },
    { id: 3, nome: 'Marjorie Roseira', idade: 52, peso: 72.19 },
    { id: 4, nome: 'Jorge Anhaia', idade: 15, peso: 36.72 }
];

console.log(objArray);
console.log(typeof(objArray)); // object, pois um array é tratado como objeto

const id1 = objArray.find((obj) => {
    return obj.id == 1;
});

const id3 = objArray.find((obj) => {
    return obj.id == 3;
});

console.log(id1);
console.log(id3);

// Formar um novo array só com as idades
const idades = [];
objArray.forEach((obj) => {
    idades.push(obj.idade);
});

console.log(idades);

// Formar um novo array só com os nomes e pesos das pessoas
const pesos = [];
objArray.forEach((obj) => {
    pesos.push({
        nome: obj.nome,
        peso: obj.peso,
        id: obj.id * 2
    });
});

console.log(pesos);