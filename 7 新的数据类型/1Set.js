/* jshint esversion: 6 */
const set = new Set();

//添加元素
set
	.add(1)
	.add(2)
	.add(3)
	.add(3); //该句不会起作用，因为集合不允许重复元素
console.log(set);

//删除元素
set.delete(2);
console.log(set);

//检查元素
set.has(2);
set.has(3);

//清空集合
set.clear();
console.log(set);

//遍历元素
const set2 = new Set([1, 2, 3, 4]);
set2.forEach(item => {
	console.log(item);
});

/*set2.forEach(item => {
	console.log(item * this.foo)
}, {
	foo: 2
});*/