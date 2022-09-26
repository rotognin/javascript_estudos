/**
 * "Enhanced Object Literals" - Objetos literais melhorados
 */

// Não precisa montar o objeto informando: fabricante: fabricante, modelo: modelo, ano: ano
// É só informar os campos em cada linha que o objeto será montado com a propriedade e o valor
function getLaptop(fabricante, modelo, ano){
    return {
        fabricante,
        modelo,
        ano
    };
}

console.log(getLaptop('Asus', 'AK766', 2022));

/**
 * Parâmetros variáveis
 */
function soma(...args){
    let soma = 0;
    for (let arg of args){
        soma += arg;
    }
    return soma;
}

let numero = soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numero);