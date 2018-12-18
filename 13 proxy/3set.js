/* jshint esversion: 6 */
const obj = {};

const proxy = new Proxy(obj, {
	set(target, prop, value) {
		console.log(`Setting value "${value}" on the key "${prop}" in the target object.`);
		target[prop] = value;
		return true;
	}
});

proxy.foo = 1;