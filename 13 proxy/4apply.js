/* jshint esversion: 6 */
const sum = function(...args) {
	return args
		.map(Number)
		.filter(Boolean)
		.reduce((a, b) => a + b);
};

const proxy = new Proxy(sum, {
	apply(target, thisArg, args) {
		console.log(`Functon is being called with arguments [${args.join()}] 
			and context ${thisArg}`);
		return target.call(thisArg, ...args);
	}
});

console.log(proxy(1, 2, 3));