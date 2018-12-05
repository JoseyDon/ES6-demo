/* jshint esversion: 6 */
const {
	foo,
	bar
} = {
	foo: 1
};
console.log(foo, bar);

const [a, b, c] = [1, 2];
console.log(a, b, c);

const {
	d = 1
} = {
	e: 2
};
console.log(d);

const [f, g = 2] = [1];
console.log(f, g);