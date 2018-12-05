/* jshint esversion: 6 */
const weakset = new WeakSet();
let foo = {
	bar: 1
};

weakset.add(foo);
console.log(weakset.has(foo));

foo = null;
console.log(weakset.has(foo));