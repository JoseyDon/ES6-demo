/* jshint esversion: 6 */
function sum(...numbers) {
	return numbers.reduce((a, b) => a + b);
}

let all = sum(...[1, 2, 3]);
console.log(all);