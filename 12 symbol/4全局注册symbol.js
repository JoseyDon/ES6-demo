/* jshint esversion: 6 */
const symbol = Symbol.for('foo');
const obj = {};
obj[symbol] = 'bar';

const anotherSymbol = Symbol.for('foo');
console.log(symbol == anotherSymbol);
console.log(obj[anotherSymbol]);

console.log(Symbol.keyFor(symbol));