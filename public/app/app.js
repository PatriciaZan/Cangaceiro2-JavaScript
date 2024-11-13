import { handleStatus, log, retry } from "./utils/promise-helpers.js";
import './utils/array-helpers.js';
import { notasService as service } from "./nota/service.js";
import { takeUntil, debounceTime, partialize, pipe } from "./utils/operators.js";
import { EventEmitter } from "./utils/event-emitter.js";
import { Maybe } from "./utils/maybe.js";
//-------- TEST

const resultado = Maybe
    .of(10)
    .map(value => value + 10)
    .map(value => value + 30)
    //.get(); // retorna 50
    .getOrElse(0) // retorna 0

    console.log(resultado);
    

//const maybe = Maybe.of(10);
//if(!maybe.isNothing()){}
//const maybe2 = new Maybe(null);

// export class Maybe {
//     constructor(value){
//         this._value = value;
//     }
//     static of(value){
//         return new Maybe(value);
//     }
// }

//--------
//-------- TEST

const textToArray = textM => textM.map(text => Array.from(text));
const arrayToText = arrayM => arrayM.map(array => array.join(''));
const transform = pipe(textToArray, arrayToText);
const result = transform(Maybe.of('Cangaceiro'));
alert(result.getOrElse(''));

//-------- 
const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
);


const action = operations(() => 
    retry(3, 3000, () => timeoutPromise(1000, service.sumItems('2143')))
    .then(total => EventEmitter.emit('itensTotalizados', total))
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
//.then(log)
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