/* jshint esversion: 6 */
const obj = {
	foo: 1
};

const proxy = new Proxy(obj, {
	get(target, prop) {
		console.log(`program is trying to fetch the property "${prop}".`);
		return target[prop];
	}
});

proxy.foo;