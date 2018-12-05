/* jshint esversion: 6 */
const obj = {
	hello: 'world',
	foo() {
		const bar = () => this.hello;
		return bar;
	}
};

obj.foo();