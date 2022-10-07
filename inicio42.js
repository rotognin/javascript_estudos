console.log(undefined); // undefined
console.log(typeof(undefined)); // undefined

if (undefined){
    console.log("Sim, 'undefined' foi considerado TRUE");
} else {
    console.log("Não, 'undefined' foi considedrado FALSE"); // Cai aqui
}

console.log(NaN); // NaN
console.log(typeof(NaN)); // Number!

console.log(isNaN(NaN)); // True
console.log(NaN === NaN); // False

let nome = 'Rodrigo Tognin';
let trocado = nome.replace('Tognin', 'tOgNiN');

console.log(trocado);

/*
console.log('10 13 21 48 52'.replace(/\d+/g, function (number) {
    return parseInt(number) > 30 ? '$' : number;
}));
*/

// Usando o replace com regex e uma função de callback
// No regex tem que colocar o "g" para ele tratar globalmente, todas
// as letras da string
console.log(nome.replace(/[A-Za-z]/g, (letra) => {
    switch (letra){
        case 'o':
            return '0';
            break;
        case 'n':
            return 'N';
            break;
        case 'i':
            return '1';
            break;
        default:
            return letra;
    }
}));

// A função "sort" do array aceita uma função de callback.
// Estudar para ver como ela funciona
let numeros = [5,4,6,9,3,7,1];
console.log(numeros.sort((numero) => {
    console.log(numero);
    return -1;
}));