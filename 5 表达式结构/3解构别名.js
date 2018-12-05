/* jshint esversion: 6 */
function fetchDate() {
	return {
		response: ['foo', 'bar']
	};
}

const {
	response: data
} = fetchDate();
console.log(data);