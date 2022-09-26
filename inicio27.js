/**
 * Aprendendo algumas coisas bacanas do ES6
 */

// desestruturação de arrays
let carros = ['Gol', 'Uno', 'Up', 'Jetta'];
let [car1, car2, car3, car4] = carros;

// Isso irá atribuir cada valor do array para a variável de mesma posição
console.log(`
    --- Carro 1: ${car1}
    --- Carro 2: ${car2}
    --- Carro 3: ${car3}
    --- Carro 4: ${car4}
`);

// Atribuição desestruturada por objetos
let pessoa = {
    nome: "Rodrigo Tognin",
    profissao: "Analista Programador Pleno",
    nivel: 57.4
};

// Ao invés de acessar as propriedades usando pessoa.nome, é possível
// desestruturar as propriedades atribuindo a variáveis da seguinte forma:
let { nome, profissao, nivel } = pessoa;

console.log(`
    --- Relatório:
        --> Nome: ${nome}
        --> Profissão: ${profissao}
        --> nivel: ${nivel}
`);