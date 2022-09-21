/**
 * Em Javascript, as variáveis passadas para funções são passadas "por valor",
 * ou seja, elas não são alteradas fora da função.
 * Os objetos sim, são alterados, pois eles são passados por referência.
 * 
 * ***** De acordo com os testes abaixo, as funções não alteraram os valores de objetos! ***
 */

function alterar(){
    // Se for passada uma variável, ela será alterada aqui, mas não fora
    if (typeof(arguments[0]) === 'object'){
        arguments[0] = { valor: "alterado!" };
    } else {
        arguments[0] = 'alterado!';
    }

    console.log('Dentro da função: ');
    console.log(arguments[0]);
}

const var1 = {
    valor: 'original'
};

const var2 = 'original';

console.log('--- Antes ---');
console.log(var1);
console.log(var2);

alterar(var1);
alterar(var2);

console.log('--- Depois ---');
console.log(var1);
console.log(var2);

function alterar2(str){
    str = 'Alterado!';
}

const var3 = '3 - original';
console.log('2 - ' + var3);
alterar2(var3);
console.log('2 - ' + var3);

function alterar3(arr){
    arr = [1, 2, 3];
}

const var4 = [3, 2, 1];
console.log(var4);
alterar3(var4);
console.log(var4);

const var5 = {
    valor: 'Original'
};

console.log(var5);

function alterar4(obj){
    obj = {
        valor: 'Alterado'
    };
}

console.log(var5);