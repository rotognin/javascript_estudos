/**
 * Testar a função fetch para puxar informações do github
 */
import fetch from 'node-fetch';
import fs from 'fs';

const url = 'https://api.github.com/users/rotognin';

fetch(url)
    .then((retorno) => {
        console.log(retorno);
        /*
        fs.writeFile('inicio37.txt', JSON.stringify(retorno), 'utf8', (err) => {
            console.log(`Erro ao escrever no arquivo: ${err}`);
        });
        */
    })
    .catch((msg) => {
        console.log(`Não deu certo... ${msg}`);
    });