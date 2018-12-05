/* jshint esversion: 6 */
const [foo, bar] = [1, 2];
const [a, , b] = [1, 2, 3];
const [c, d, ...rest] = [1, 2, 3, 4, 5];
console.log(foo, bar);
console.log(a, b);
console.log(c, d);
console.log(rest);