/**
 * Testar funções de formas diferentes
 */

// Essa função irá retornar uma função anônima.
// Não irá funcionar se chamada, ela deverá ser atribuída
function funcao (){
    return (texto) => { return texto.length; };
}

const nome = 'Rodrigo Tognin';
const tamanho = funcao(); // Atribuir o retorno da função para a variável

console.log(tamanho(nome));