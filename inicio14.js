function msg(texto = ''){
    if (texto != ''){
        console.log(texto);
    }
}

// Mais testes gerais com Javascript.
// Manipulação de arrays
const carros = [
    'Gol', 'Voyage', 'Jetta', 'Uno', 'Fusca'
];

msg(carros.length);
msg(carros);
msg(carros.sort()); // Ordenar

carros[10] = 'Fusion'; // Isso faz com que sejam criados "buracos" no array
msg("---- " + carros);

// msg(typeof(carros)); // O tipo de um array retorna "object"

// Criando um array de objetos
const movimentos = [
    { nome: "malabarismo", local: "circo" },
    { nome: "dança", local: "salão" }
];

msg(movimentos);
msg(movimentos[0].nome);
msg(movimentos.length); // Retorna 2, pois existem 2 objects no array

movimentos.forEach((obj, idx) => {
    msg(idx + " = " + obj.nome + " -> " + obj.local);
});

const movimento = {
    nome: "corrida", local: "rua"
};

movimentos.push(movimento);
msg(movimentos);

// typeof no array vai retornar um objeto, para saber se
// um array realmente é um array, usa-se Array.isArray()
if (Array.isArray(movimentos)){
    msg("Sim, 'movimentos' é um array");
}

// Outra forma de saber se um array é mesmo array
if (movimentos instanceof Array){
    msg("Sim, verificamos que 'movimentos' é um array mesmo!");
}