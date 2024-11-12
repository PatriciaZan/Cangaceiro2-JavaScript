import { handleStatus, log, delay } from "./utils/promise-helpers.js";
import './utils/array-helpers.js';
import { notasService as service } from "./nota/service.js";
import { takeUntil, debounceTime, partialize, pipe } from "./utils/operators.js";

const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
);


const action = operations(() => 
    timeoutPromise(200, service.sumItems('2143'))
    .then(delay(5000))
    .then(log)
    .catch(log)
);


document
    .querySelector('#myButton')
    .onclick =  action;
      
const promise1 = new Promise((resolve, reject) =>
    setTimeout(() => resolve('promise 1 resolvida'), 3000));

const promise2 = new Promise((resolve, reject) =>
    setTimeout(() => resolve('promise 2 resolvida'), 1000));
    Promise.race([
    promise1,
    promise2
])
    .then(log)
    .catch(log)


/*CODIGO REMOVIDO */
/*
//const operation2 = debounceTime(500, operation1);


const sumItems = code => notas => notas
    .$flatMap(nota => nota.itens)
    .filter(item => item.codigo == code)
    .reduce((total, item) => total + item.valor, 0)

fetch('http://localhost:3000/notas')
        .then(handleStatus)
        //.then(notas => notas.reduce((array, nota) => array.concat(nota.itens), []))
        .then(sumItens('2143'))
        .then(log)
        .catch(console.log);

    //.then(log) // log
    //.then(itens => itens.filter(item => item.codigo == '2143'))
    //.then(log) 
    //.then(itens => itens.reduce((total, item) => total + item.valor , 0))
//console.log('oiii');
*/