// Criar várias funções que irão se revolver com um tempo.

function funcao1(tempo, mensagem) {
    if (isNaN(tempo)){
        console.log("tempo incorreto passado, mensagem: " + mensagem);
        return;
    }

    setTimeout(() => {
        console.log(mensagem);
    }, tempo);
}

console.log("Aguarde...");
funcao1(2000, "Primeira execução");
funcao1(3000, "Segunda execução");
funcao1(1000, "Terceira execução");
funcao1(50, "Quarta execução");
funcao1(100, "Quinta execução");
funcao1(200, "Sexta execução");
funcao1("abc", "Incorretoooooooooo");