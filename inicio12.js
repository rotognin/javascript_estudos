let x = 0.1;
let y = 0.2;
let z = x + y;

console.log(z.toFixed(2));

let salario = 4732.90;
let porcentagem = 11;
let valor = (salario / 100) * porcentagem;

console.log("11% do salário = " + valor.toFixed(2));

const obj = {
    nome: "Rodrigo Tognin",
    materia: "Ciências da Computação",
    anoInicio: 2020,
    anoFim: 2024
};

console.log(obj);
console.log(obj["nome"]); // Pode ser acessado dessa maneira

// Acessando a propriedade de forma dinâmica
const campo = "materia";
console.log(obj[campo]);