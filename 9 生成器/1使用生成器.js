/* jshint esversion: 6 */
function* genFn() {
	let a = 2;
	yield a;

	while (true) {
		yield a = a / (2 * a + 1);
	}
}

const gen = genFn();

for (const a of gen) {
	if (a < 1 / 100) break;
	console.log(a);
}