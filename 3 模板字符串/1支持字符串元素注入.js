/* jshint esversion: 6 */
const str = 'str';
const num = 1;
const void0 = void(0);
const bool = true;
const obj = {
	foo: 'bar'
};
const arr = [1, 2, 3];
const err = new Error('error');
const regexp = /foobar/;

const str1 = `String: ${str}`;
const str2 = `Number: ${num}`;
const str3 = `Null: ${void0}`;
const str4 = `Boolen：${bool}`;
const str5 = `Object: ${obj}`;
const str6 = `Array: ${arr}`;
const str7 = `Error: ${err}`;
const str8 = `RegExp: ${regexp}`;
console.log(`${str1}
${str2}
${str3}
${str4}
${str5}
${str6}
${str7}
${str8}`);