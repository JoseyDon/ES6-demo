/* jshint esversion: 6 */
class point2D {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	toString() {
		return `(${this.x},${this,y})`;
	}
}

class point3D {
	constructor(x, y, z) {
		super(x, y);
		this.z = z;
	}
	toString() {
		return `(${this.x},${this.y},${this.z})`;
	}
}