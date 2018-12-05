/* jshint esversion: 6 */
let array = ['a', 'bc', 'ed', 'fgh'];
array = array.sort((a, b) => a.length < b.length);
console.log(array);