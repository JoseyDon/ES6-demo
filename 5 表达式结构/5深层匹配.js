/* jshint esversion: 6 */
//对象在对象中
const {
	a,
	b: {
		c
	}
} = {
	a: 1,
	b: {
		c: 2
	}
};
console.log(a, c);

//数组在对象中
const {
	d,
	e: [f]
} = {
	d: 1,
	e: [2, 3]
};
console.log(d, f);

//对象在数组中
const [g, {
	h
}] = [1, {
	h: 2
}];
console.log(g, h);

//数组在数组里
const [r, [, i]] = [1, [2, 3]];
console.log(r, i);