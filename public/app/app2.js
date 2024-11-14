import { Person } from './models/person';
import { decorate } from './utils/decorate.js';
import { logExecutionTime, inspectMethod } from './models/decorators.js';

decorate(Person, {
    speak: [inspectMethod({ excludeReturn: true }), logExecutionTime],
    getFullName: [logExecutionTime]
    });


const method = Person.prototype.speak;

Person.prototype.speak = function (...args) {
    console.log(`Argumentos do método: ${args}`);
    console.time('speak');

    const result = method.bind(this)(...args);
    console.log(`Resultado do método: ${result}`);
    console.timeEnd('speak');
    return result;
};

const person = new Person('Flávio', 'Almeida');
//person.getFullName();
person.speak('Canganceiro JavaScript');
person.getFullName();