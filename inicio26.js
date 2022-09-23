/**
 * Dá para iterar em arrays e strings
 */

const nome = "Rodrigo Tognin";

for (letra of nome){
    if (letra == "o"){
        console.log("Letra o");
    }
}

// Construir um "Set" com o nome. As letras repetidas não entrarão
const nomeSet = new Set;

for (letra of nome){
    nomeSet.add(letra);
}

console.log(nomeSet);

// Transforma uma string em array. Sem usar um separador,
// cada letra torna-se um elemento do array
const nomeArray = nome.split("");
console.log(nomeArray);

// Usando espaço como separador, cria um array com dois valores
const nomesArray = nome.split(" ");
console.log(nomesArray);

/**
 * Maps é um tipo de array mas com qualquer tipo de chave
 * Tipo os arrays do PHP, onde as chaves podem ser qualquer coisa
 * Mapas usam set() e get() para adicionar e pegar os valores
 * size para o tamanho, delete para remover valores
 * has() para ver se tem algum valor nele
 */

const situacao = new Map();
situacao.set('ATIVO', 1);
situacao.set('INATIVO', 0);

console.log(situacao);

const produto = {
    nome: "Sofá",
    situacao: 1
};

if (produto.situacao == situacao.get('ATIVO')){
    console.log("O sofá está ativo!");
}

// Para criar um mapa no construtor, deve-se passar um array com arrays de valores
const vg = new Map([
    ['psx', 'Playstation'],
    ['ps2', 'Playstation 2'],
    ['xbox', 'XBOX'],
    ['md', 'Mega Drive'],
    ['snes', 'Super Nintendo']
]);

console.log(vg.get('ps2'));

if (vg.has('snes')){
    console.log(vg.get('snes'));
}

/**
 * Testando várias possibilidades de se usar o Map
 * Qualquer tipo de chave ele aceita!
 */
const testeMap = new Map;
testeMap.set(true, false);
testeMap.set(false, true);
testeMap.set({ tipo: 'objeto'}, 1);
testeMap.set(undefined, 'Indefinido');
testeMap.set(null, 'Nulo!!!');
//testeMap.set(testeMap, 'Doidoooo'); << Aí não... referência circular kkkkk
testeMap.set(['array', 'como', 'chave'], ['array', 'como', 'valor']);

console.log(testeMap);