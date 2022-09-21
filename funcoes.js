module.exports = {
    autor: () => { return "Rodrigo Tognin"; },
    idade: () => { return 38; },
    maiusculo: (mensagem) => {
        if (mensagem == undefined){
            return "Mensagem não passada!";
        }
        if (mensagem == ''){
            return "Mensagem vazia!";
        }
        return mensagem.toUpperCase();
    },
    escrever: (mensagem) => {
        console.log(mensagem);
    },
    checarNome: (nome) => {
        return new Promise((resolve, reject) => {
            if (nome == 'Rodrigo'){
                resolve('Tognin');
            } else {
                reject('nome incorreto!');
            }
        });
    }
}