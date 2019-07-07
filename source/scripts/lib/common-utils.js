const _ = require('lodash')

function randOf(array) {
	// return one of the elements of the array, at random (uniform distribution)
	let rand_index = _.random(0, array.length - 1)
	return array[rand_index]
}

module.exports = {
	randOf: randOf,
}
