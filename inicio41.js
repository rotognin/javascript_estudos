// Short Syntax

const nome = 'Rodrigo Tognin';
const idade = 38;

// Ao criar um objeto, não precisa informar o nome da chave
// caso a gente queira que o nome seja o mesmo que a variável
const usuario = {
    nome, // Não precisa informar nome: nome
    idade // Não precisa informar idade: idade
};

console.log(usuario);

// Nesse exemplo eu preciso informar o nome da chave pois estou
// usando nomes diferentes para ela.
// Posso misturar: informo a chave para uns e para outros não.
// Dá certo, ele cria o objeto corretamente.
const pessoa = {
    atribuicao: nome,
    anos: idade,
    nome,
    idade
};

console.log(pessoa);

// Optional chaining
const cidadao = {
    nome: 'Rodrigo Tognin',
    idade: 38,
    endereco: {
        rua: 'Rua da Silva',
        numero: 545,
        cep: {
            codigo: 13408000,
            cidade: 'Piracicaba',
            uf: 'SP'
        },
        // Função dentro de um objeto
        enderecoCompleto() {
            return this.rua + ', ' + this.numero;
        }
    }
};

// Se eu precisar acessar uma propriedade do objeto que pode não existir,
// preciso usar o optional chaining, informando um "?" na propriedade
// a ser verificada
console.log(cidadao.endereco.cep.codigo); // Existe

// Estou verificando se as propriedades "código" e "ibge" existem. Se não existir, tudo irá retornar
// null, daí eu verifico com o "nullish coalescing operator" para retornar uma mensagem padrão
console.log(cidadao.endereco?.codigo?.ibge ?? 'Não existe código IBGE para o objeto informado'); // Não existe


// Chamar a função dentro do objeto, verificando se ela existe
// No caso da função, tenho que colocar um "?." antes dos parêntesis
console.log(cidadao.endereco?.enderecoCompleto?.()); // Existe
console.log(cidadao.endereco?.zip?.zipCompleto?.() ?? 'Função "zipCompleto" não existe'); // Não existe

const chave = 'nome';
console.log(cidadao[chave]); // Buscar uma propriedade do objeto usando uma variável

// Tagged Template Literals
function funcao (msg) {
    return msg;
}

// Ao chamar a mensagem dessa forma, é retornado um array
console.log(funcao`Opa, esse rapaz manda bala!`);