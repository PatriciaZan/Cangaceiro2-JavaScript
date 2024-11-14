export const logExecutionTime = (method, property, args) => {

    console.log(`Método decorado: ${property}`);
    console.log(`Argumentos do método ${args}`);
    console.time(property);

    const result = method(...args);

    console.timeEnd(property);
    console.log(`resultado do método: ${result}`)
    return result;

    
};

export const inspectMethod = (method, property, args) => {
    console.log(`Método decorado: ${property}`);
    console.log(`Argumentos do método ${args}`);
    const result = method(...args);
    if(!excludeReturn) console.log(`resultado do método: ${result}`)
    return result;
};


export const decorate = (clazz, handler) => 
    Object.keys(handler).forEach(property => {
        const method = clazz.prototype[property];
        const decorator = handler[property];

        clazz.prototype[property] = function (...args) {
            return decorator(method.bind(this), property, args);
        }
 });