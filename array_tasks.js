var arrayTasks = {

	concat: function (arr1, arr2) {
			array = arr1.concat(arr2);
			return array;
	},

	insertAt: function (arr, itemToAdd, index) {
 		arr.splice(index, 0, itemToAdd);
			return arr;
	},

	square: function (arr) {
 	newArray = [];

		 for(let number of arr) {
				n = number * number;
				newArray.push(n);
		}
		return newArray;
	},

	// sum: function (arr) {
 //
	// },
 //
	// findDuplicates: function (arr) {
 //
	// },
 //
	// removeAndClone: function (arr, valueToRemove) {
 //
	// },
 //
	// findIndexesOf: function (arr, itemToFind) {
 //
	// },
 //
	// sumOfAllEvenNumbersSquared: function (arr) {
 //
	// }

}

module.exports = arrayTasks
