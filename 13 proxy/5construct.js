/* jshint esversion: 6 */
class Foo {}

const proxy = new Proxy(Foo, {
	construct(target, args, newTarget) {
		return {
			argumens: args
		}; //返回new所得到的实例
	}
});

const obj = new proxy(1, 2, 3);
console.log(obj.argumens);