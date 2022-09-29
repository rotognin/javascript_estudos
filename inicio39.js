/**
 * Treinando eventos do NODE
 * Pegando argumentos da linha de comando
 */

import * as events from 'events';

var ee = new events.EventEmitter();
ee.on('gritar', (msg) => {
    console.log('Evento "gritar" foi acionado!');
    console.log(`Mensagem: ${msg}`);
});

const cmd = process.argv;

if (cmd.length > 2){
    if (cmd[2] !== undefined){
        ee.emit('gritar', cmd[2]);
    }
} else {
    console.log("Nenhum argumento adicional passado...");
}

// console.log(process.argv);