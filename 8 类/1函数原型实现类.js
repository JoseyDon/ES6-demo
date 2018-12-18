function Animal(family, specie, hue) {
	this.family = family;
	this.specie = specie;
	this.hue = hue;
}

Animal.prototype.yell = function() {
	console.log(this.hue);
};

var dog = new Animal('Canidae', 'Canis lupus', 'Woug');
dog.yell();