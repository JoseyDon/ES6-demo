/* jshint esversion: 6 */
class Animal {
	constructor(family, specie, hue) {
		this.family = family;
		this.specie = specie;
		this.hue = hue;
	}
	yell() {
		console.log(this.hue);
	}
	static extend(constructor, ...args) {
		return class extends Animal {
			constructor(...args) {
				super(...args);
				constructor.call(this, ...args);
			}
		};
	}
}
const Dog = Animal.extend(function(name) {
	this.name = name;
}, 'Canidae', 'Cans lupus', 'Woug');

const doge = new Dog('Doge');
console.log(doge.name);