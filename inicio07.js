const objeto = {
    nome: "Rodrigo",
    sobrenome: "Tognin",
    completo: () => {
        return objeto.nome + " " + objeto.sobrenome;
    }
};

var pessoa = objeto.completo();
console.log(pessoa);

let num = 10;
console.log(++num);
console.log(num++);
console.log(num--);

let mensagem = (num == 12) ? "O número é doze" : "O número não é doze: " + num;
console.log(mensagem);

let par = ((num % 2) == 0);
if (par){
    console.log("O número " + num + " é par");
} else {
    console.log("O número " + num + " é ímpar");
}

console.log("O tipo da variável par é " + typeof(par));

let num1 = 10;
let num2 = 10.0;
let num3 = 10.1;

console.log(typeof(num1) + " - " + typeof(num2) + " - " + typeof(num3));
console.log(num1 + " == " + num2 + " = " + (num1 == num2));  // true
console.log(num1 + " === " + num2 + " = " + (num1 === num2)); // true
console.log(num2 + " === " + num3 + " = " + (num2 === num3)); // false
console.log(num2 + " == " + num3.toFixed(0) + " toFixed(0) = " + (num2 == num3.toFixed(0))); // true (é o mesmo número, mas não idêntico)
console.log(num2 + " === " + num3.toFixed(0) + " toFixed(0) = " + (num2 === num3.toFixed(0))); // false (é o mesmo número, mas não é idêntico)
console.log(num1 + " == " + num3.toFixed(0) + " toFixed(0) = " + (num1 == num3.toFixed(0))); // true 
console.log(num1 + " === " + num3.toFixed(0) + " toFixed(0) = " + (num1 === num3.toFixed(0))); // false

console.log(num1.toFixed(0) == num3.toFixed(0)); // true
console.log(num1.toFixed(0) === num3.toFixed(0)); // true
console.log(num2.toFixed(0) == num3.toFixed(0)); // true
console.log(num2.toFixed(0) === num3.toFixed(0)); // true