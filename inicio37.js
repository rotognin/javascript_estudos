/**
 * Testar a função fetch para puxar informações do github
 */
import fetch from 'node-fetch';
import fs from 'fs';

const url = 'https://api.github.com/users/rotognin';

fetch(url)
    .then(async (retorno) => {
        const resultadoConvertido = await retorno.json();
        console.log(resultadoConvertido);
        
        fs.writeFile('inicio37.json', JSON.stringify(resultadoConvertido), 'utf8', (err) => {
            if (err) {
                console.log(`Erro ao escrever no arquivo: ${err}`)
            }
        });
    })
    .catch((msg) => {
        console.log(`Não deu certo... ${msg}`);
    });