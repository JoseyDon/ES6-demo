/* jshint esversion: 6 */
class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	get d() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}
}

const p = new Point(3, 4);
console.log(p.d);