const programador = {
    nome: "Rodrigo",
    sobrenome: "Tognin",
    idade: 38,
    tecnologias: ["Cobol", "Delphi", "SQL"],
    nomeCompleto: (separador = " ") => {
        return programador.nome + separador + programador.sobrenome;
    },
    anoNascimento: (ano) => {
        return new Promise((resolve, reject) => {
            if (ano <= programador.idade){
                reject("O ano está incorreto");
            } else {
                let nascimento = ano - programador.idade;
                resolve("Ano de nascimento: " + nascimento);
            }
        });
    }
};

console.log(programador.nomeCompleto("."));

const ano = 2022;

let nascimento = 0;
programador.anoNascimento(ano)
    .then((msg) => { 
        console.log(msg); 
    })
    .catch((msg) => {
        console.log(msg);
    });