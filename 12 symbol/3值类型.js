/* jshint esversion: 6 */
const symbol = Symbol('hello');

function fn1(_symbol) {
	return _symbol == symbol;
}

console.log(fn1(symbol));

function fn2(_symbol) {
	_symbol = null;
	console.log(_symbol);
}

fn2(symbol);
console.log(symbol);