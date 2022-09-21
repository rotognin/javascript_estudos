// Testando arrays
const lista = [
    'Artemis', 'Boa Esperança', 'Astúrias', 'Parque Piracicaba'
];

if (lista[0].startsWith('A')){
    console.log(`${lista[0]} começa com A`);
}

// Filtra o Array e cria um novo array apenas com o resultado
// que voltar como verdadeiro
const lista_a = lista.filter((nome) => {
    // Filtrar o nome dos bairros que começam com "A"
    return nome.startsWith('A');
});

console.log(lista_a);

// Vai retornar o primeiro valor encontrado.
// Se o valor não for encontrado, "bairro" está como undefined
const bairro = lista.find((nome) => {
    return nome.startsWith("C");
});

console.log(bairro);
if (bairro === undefined){
    console.log("Não foi encontrado um bairro com a letra C na lista.");
}

console.log("--- Checar se todos os bairros tem mais que 4 letras");
if (lista.every((nome) => {
    return nome.length > 4;
})){
    console.log("Sim, todos os bairros tem mais que 4 letras");
}

// Encontrar o índice de um elemento que tenha mais que 8 letras
const idx_bairro_8 = lista.findIndex((nome) => {
    return nome.length >= 8;
});

console.log(idx_bairro_8 + ' -> ' + lista[idx_bairro_8]);

// A função "includes" verifica se existe um determinado valor no array
const msg_busca = (lista.includes('Artemis')) ? 'Tem Artemis' : 'Não tem Artemis';
console.log(msg_busca);

// Retornar o índice de um valor
const idx_asturias = lista.indexOf('Astúrias');
console.log("Índice de Astúrias: " + idx_asturias);

const juntos = lista.join('|');
console.log(juntos);

// Essa função "map" é bacana se aprofundar nela.
// Ela cria um novo array com novas informações do array passado
const lista_2 = lista.map((nome, indice) => {
    return (nome.length > 10) ? "!- " + nome + " -!" : "?- " + nome + " -?" ;
});

console.log(lista_2);

const lista_3 = lista.map((nome) => {
    return (nome.length > 10) ? false : nome;
});

console.log(lista_3);

// Remove o último elemento do array, retornando ele
console.log('--- Retirar o último elemento do array --- ');
const ultimo = lista_2.pop();
console.log(ultimo + " - Retirado da lista:");
console.log(lista_2);

// Testar a função reduce()
// Passar dois parâmetros: a variável que será acumulada, e o item do array
// a ser verificado. após a função, passar o valor inicial.
// Aqui iremos somar todas as letras dos itens do array
const soma_letras = lista.reduce((total, nome) => {
    return total + nome.length;
}, 0);

console.log("Soma dos nomes dos bairros: " + soma_letras);

