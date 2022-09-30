/**
 * Alguns testes com objetos e outras coisas
 */

const usuario = {
    nome: 'Rodrigo Tognin',
    idade: 38,
    endereco: {
        rua: 'Rua da Silva',
        numero: 545
    }
};

console.log(usuario);

// Desestruturação
// No caso do endereço, estou pegando pelo memo nome
// Já a idaded estou pegando por outro nome: "anos"
// email com valor padrão, caso essa variável não exista no objeto
const { endereco, idade: anos, email = 'Nenhum...' } = usuario;
const relatorio = `
    --- Usuário:
    -> ${usuario.nome}
    -> Idade: ${anos}
    -> Endereço: ${endereco.rua}, ${endereco.numero}
    -> E-mail: ${email}
`;

console.log(relatorio);

/**
 * A desestruturação pode ser usada em uma função também
 * A função deverá receber um objeto que tenha esse campo
 */
 function mostrarIdade({ idade, nome: rapaz }){
    // Renomeando o campo nome para "rapaz"
    return rapaz + ' - ' + idade;
}

// Pode ter um valor padrão também
function mostrarIdades({ idades = 78 }){
    return idades;
}

console.log(mostrarIdade(usuario));
console.log(mostrarIdades(usuario));

// Rest operator
// Pegar todas as outras informações do objeto que não foram pegas
// de forma literal
const { nome, ...infos } = usuario;

// Nesse caso vai retornar as informações o objeto menos o nome, que foi
// pego ded forma direta
console.log(`Demais informações do usuário: ${JSON.stringify(infos)}`);

// Desestruturação de arrays
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Essa vírgula em branco significa que estou pulando o terceiro elemento,
// ou seja, eu não estou pegando ele
const [primeiro, segundo, , quarto, ...resto] = array;

const objNumeros = {
    primeiro,
    segundo,
    quarto
};

console.log(objNumeros);
console.log(resto); // Retorna o array sem os que foram pegos diretamente