/* jshint esversion: 6 */
const weakmap = new WeakMap();
let keyObject = {
	id: 1
};
const valObject = {
	score: 100
};

weakmap.set(keyObject, valObject);
console.log(weakmap.get(keyObject));
keyObject = null;
console.log(weakmap.get(keyObject));
console.log(weakmap.has(keyObject));