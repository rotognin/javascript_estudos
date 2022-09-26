/**
 * Módulo que será exportado
 */
module.exports = {
    // Exportando propriedade
    numero: 45.33,

    // Exportando uma função
    calcular: (num1 = 0, num2 = 0) => {
        let num3 = num1 + (3 * num2);
        let num4 = num3 + 5;
        let num5 = num1 + 10 + (4 * num4);
        let total = (num1 + num2 + num3 + num4 + num5) / 10;
        
        return total;
    }
}
