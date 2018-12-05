/* jshint esversion: 6 */
const names = ['DongYu', 'Dongxixi', 'Dongmaoqiu', 'JoseyDon', 'Josey'];

const newSet = names
	.map((name, index) => ({
		id: index,
		name: name
	}))
	.filter(man => man.id % 2 == 0)
	.map(man => [man.name])
	.reduce((a, b) => a.concat(b));

console.log(newSet);