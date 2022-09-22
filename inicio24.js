/**
 * Testar as três formas adicionais de trabalhar com funções:
 * call(), apply() e bind()
 */

// call()
// Chama uma função passando um objeto como parâmetro para
// ser usado como contexto
const usuario = {
    nome: "Rodrigo Tognin",
    idade: 38,
    email: "123@outlook.com",
    dia: 8,
    mes: 10,
    ano: 1983
};

//console.log(usuario.idade);

function alterar(campo, valor){
    if (this[campo] == undefined){
        return false;
    }

    this[campo] = valor;
    return true;
}

console.log("--- Antes: ");
console.log(usuario);

if (!alterar.call(usuario, "email", "email@gmail.com")){
    console.log("Campo incorreto a ser alterado.");
}

console.log("--- Depois");
console.log(usuario);

if (!alterar.call(usuario, "endereco", "Rua tal, 5")){
    console.log("Campo endereco incorreto a ser alterado");
}

// A função apply() é a mesma coisa que a call(), a diferença é
// que os parâmetros devem ser passados como um array
alterar.apply(usuario, ['dia', 10]);
alterar.apply(usuario, ['mes', 9]);
alterar.apply(usuario, ['ano', 1990]);

console.log("--- Depois de alterar as datas do usuário")
console.log(usuario);

function relatorio(){
    console.log(`
        --- Relatório do Usuário:
        ${this.nome} - ${this.email}
        Nascimento: ${this.dia}/${this.mes}/${this.ano}
    `);
}

// bind() cria uma nova função que tem o objeto ligado para ser usado
const relatorioUsuario = relatorio.bind(usuario);

relatorioUsuario();