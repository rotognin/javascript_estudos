function promessa(numero){
    return new Promise((resolve, reject) => {
        if (numero == 0){
            resolve("Sucesso! O número é zero.");
        } else {
            reject("Opa, o número não é zero!");
        }
    });
}

var msg = promessa(10)
    .then((retorno) => {
        console.log(retorno);
    })
    .catch((retorno) => {
        console.log(retorno);
    });