/**
 * Funções auto-invocáveis
 * São funções que se invocam automaticamente para, por exemplo, 
 * atribuir um valor mais complexo para uma variável
 */

const valorInicial = 3.14;
const valorComplexo = (() => {
    const a = valorInicial * 3.15;
    const b = a.toFixed(2);

    console.log(a);
    console.log(b);

    return a - b;
})();

console.log(valorComplexo);

const valorMaisComplexo = (() => {
    const a = valorComplexo * 10;
    console.log(a);

    return a - 1;
})(valorComplexo);

console.log(valorMaisComplexo);
console.log(valorMaisComplexo.toFixed(2));
console.log(Math.round(valorMaisComplexo));
console.log(Math.random());

const varRandom1 = (() => {
    return (Math.random() - Math.random()) * -1;
})();

console.log(varRandom1);

// Math.abs retorna o valor absoluto (módulo)
const valorRandom2 = (() => {
    return Math.abs(Math.random() - Math.random());
})();

console.log(valorRandom2);

// Math.ceil arredonda para cima
console.log(Math.ceil(valorRandom2));

// Math.floor arredonda para baixo
console.log(Math.floor(valorRandom2));

// A função Math.sign() retorna 3 valores:
// n > 0 => retorna 1
// n = 0 => retorna 0
// n < 0 => retorna -1
console.log("5 => " + Math.sign(5));
console.log("0 => " + Math.sign(0));
console.log("-5 => " + Math.sign(-5));

// A função Math.trunc() retorna apenas a parte inteira de um número, sem arredondar
const numeroRedondo = (() => {})();