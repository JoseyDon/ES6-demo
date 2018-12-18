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
}

const dog = new Animal('Canidae', 'Canis lupus', 'Woug');
dog.yell();