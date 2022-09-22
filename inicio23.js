/**
 * Testando funções de callbacks
 */

function primeira(valor, funcao){
    console.log("Essa é a primeira função a ser chamada com o valor " + valor);
    funcao(valor * 2);
}

function segunda(valor){
    console.log("Essa é a segunda função chamada com o valor " + valor);
}

primeira(14, segunda);

function avaliar(valor, funcao1, funcao2, funcao3){
    switch(valor){
        case 10:
            valor += 3;
            break;
        case 5:
            valor *= 2;
            break;
        default:
            valor /= 2;
    }

    if (valor > 10){
        funcao1(valor);
    }

    if (valor < 10){
        funcao2(valor);
    }

    if (valor == 10){
        funcao3(valor);
    }
}

function maiorQueDez(valor){
    console.log(`
        - O valor é maior que dez: ${valor}
    `);
}

function menorQueDez(valor){
    console.log(`
        ---> Agora o valor é menor que dez! ${valor}
    `);
}

function igualADez(valor){
    console.log(`
        => Valor EXATAMENTE igual a dez: ${valor}
    `);
}

avaliar(10, maiorQueDez, menorQueDez, igualADez);
avaliar(5, maiorQueDez, menorQueDez, igualADez);
avaliar(8, maiorQueDez, menorQueDez, igualADez);