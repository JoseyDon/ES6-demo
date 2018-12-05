/* jshint esversion: 6 */
let foo = 1;
let bar = 2;

console.log(foo, bar);

[foo, bar] = [bar, foo];

console.log(foo, bar);