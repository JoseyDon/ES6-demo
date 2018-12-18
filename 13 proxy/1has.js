/* jshint esversion: 6 */
const p = new Proxy({}, {
	has(target, prop) {
		console.log(`Checking "${prop}" is in the target or not`);
		return true;
	}
});

console.log('foo' in p);