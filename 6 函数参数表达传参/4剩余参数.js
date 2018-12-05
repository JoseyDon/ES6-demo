/* jshint esversion: 6 */
function fn(foo, ...agrs) {
	console.log(`foo: ${foo}`);
	console.log(`agrs:${agrs.join(',')}`);
}

fn(1, 2, 3, 4, 5);