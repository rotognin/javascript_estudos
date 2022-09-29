/**
 * Teste inicial sobre criação de workers
 */

import * as cluster from 'cluster';

if (cluster.isWorker){
    console.log('--- Eu sou um worker!');
    //console.log(cluster.worker);
    console.log(cluster.id);
} else {
    console.log('=== Eu sou master!');
    cluster.fork();
    cluster.fork();
}