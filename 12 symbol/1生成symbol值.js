/* jshint esversion: 6 */
const symbol = Symbol();
const symbolForSomething = Symbol('something');
const symbolWithNumber = Symbol(3.14);
const symbolWithObject = Symbol({
	'foo': 'bar'
});

console.log(symbol);
console.log(symbolForSomething);
console.log(symbolWithNumber);
console.log(symbolWithObject);

const anotherSymbol = Symbol(Symbol);
console.log(anotherSymbol);