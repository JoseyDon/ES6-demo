/* jshint esversion: 6 */
const arr = ["Mike", "John", "Sherry", "Mony"];

for (const [index, name] of arr.entries()) {
	console.log(index, name);

	if (name.match(/^w/)) break;
}