const aulas = [
    { aula: "Português", periodo: 1, professor: "Carlos"},
    { aula: "Matemática", periodo: 2, professor: "Thiago"},
    { aula: "Biologia", periodo: 3, professor: "Beatriz"}
];

function imprimir(aula, periodo, professor){
    console.log("Aula: " + aula + " - Período: " + periodo + " - Professor: " + professor);
}

// Executa a função de callback para cada item do array
aulas.forEach((lista, indice) => {
    imprimir(lista.aula, lista.periodo, lista.professor);
});

// Retorna um novo array com a execução do callback para cada item do array passado
const aula_ajustada = aulas.map((lista, indice) => {
    return "Matéria: " + lista.aula + " - Período: " + lista.periodo + " - Professor: " + lista.professor;
});

console.log(aula_ajustada);