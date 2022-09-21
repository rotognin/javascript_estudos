// Testar mais a função reduce
const notas = [
    8, 9, 5, 8, 6, 10
];

const soma = notas.reduce((total, nota) => {
    return total + nota;
}, 0);

console.log("Soma das notas: " + soma);

// A função "some" retorna true assim que encontra um elemento que passa no teste e para de executar
if (notas.some((numero, indice) => {
    console.log(indice + " - " + numero);
    return ((numero % 2) == 1);
})){
    console.log("Encontrou um número ímpar");
}

// Função splice
// Adicionar ou remover itens ao array
// O segundo parâmetro informa quantos serão removidos
notas.splice(notas.length, 0, 11, 14);
console.log(notas);

// da primeira posição, remova um item (irá remover o primeiro)
notas.splice(0, 1);
console.log(notas);

// da última posição menos um, remova um item. Irá remover o último item
notas.splice(notas.length - 1, 1);
console.log(notas);

// da primeira posição, remova um item e adicione um (irá substituir o primeiro)
notas.splice(0, 1, 100);
console.log(notas);