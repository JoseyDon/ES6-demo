/* jshint esversion: 6 */
function* foo() {
	yield 1;
	yield 2;
}

function* bar() {
	yield* foo();
	yield 3;
	yield 4;
}

for (const n of bar()) console.log(n);