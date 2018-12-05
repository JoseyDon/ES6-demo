/* jshint esversion: 6 */
const map = new Map([
	['foo', 1],
	['bar', 2]
]);
console.log(map.get('foo'));

const map2 = new Map();

//添加键值对
map2.set('foo', 'hello');
map2.set('bar', 'world');
map2.set('bar', 'ES6'); //先进先出，会覆盖之前加入的world。
console.log(map2);
//删除键值对
map2.delete('foo');
console.log(map2);
//清空键值对
map2.clear();
console.log(map2);
//获取键值对
map2.set('foo', 'JoseyDon');
map2.set('nav', 'Mm');
console.log(map2.get('foo'));
//检查键值对
console.log(map2.has('foo'));
console.log(map2.has('bar'));
//遍历键值对
console.log(Array.from(map.entries()));
for (const [key, value] of map2) {
	console.log(`${key}:${value}`);
}
map2.forEach((value, key, map2) => {
	console.log(`${key}:${value}`);
});