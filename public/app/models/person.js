export class Person {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    speak(phrase) {
        //console.time('speak'); 
        //const result = `${this._name} is speaking... ${phrase}`;
        //console.timeEnd('speak');
        //return result;
        return `${this._name} is speaking... ${phrase}`;
    }

    getFullName() {
        //console.time('speak');
        //const result = `${this._name} ${this._surname}`;
        //console.timeEnd('speak');
        //return result;
        return `${this._name} ${this._surname}`;
    }

}

decorate(Person, {
    speak: [
        inspectMethod({ excludeReturn: true }),
        logExecutionTime
    ],
    getFullName: [logExecutionTime]
});