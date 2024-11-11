import { handleStatus, log } from "./utils/promise-helpers.js";
import './utils/array-helpers.js';
import { notasService as service } from "./nota/service.js";

const sumItems = code => notas => notas
    .$flatMap(nota => nota.itens)
    .filter(item => item.codigo == code)
    .reduce((total, item) => total + item.valor, 0)


document
    .querySelector('#myButton')
    .onclick = () => 
        service
        .sumItems('2143')
        .then(log)
        .catch(log)

        


/*CODIGO REMOVIDO */
/*

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