/* jshint esversion: 6 */
const obj = {
	msg: 'world',
	greet(message = this.msg) {
		console.log(`hello ${message}`);
	}
};

obj.greet();
obj.greet('ES2015');