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

	sum: function (arr) {
		sum = 0;
		for(let number of arr) {
			sum += number;
		}
		return sum;
	},

	findDuplicates: function (arr) {
 	let newArray = [];
		let duplicatesArray = [];
		for (let item of arr) {
			if (newArray.includes(item) && !duplicatesArray.includes(item)){
				duplicatesArray.push(item);
			}
			newArray.push(item);
		}
		return duplicatesArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		for(let value of arr) {
			if (value === valueToRemove) {
				index = arr.indexOf(value);
				arr.splice(index, 1);
			}
		}
		return arr;
	},

	findIndexesOf: function (arr, itemToFind) {
		newArray = [];
 	for(let item of arr) {
			index = arr.indexOf(item);
			if(item === itemToFind) {
				newArray.push(index);
			}
		}
		return newArray;
	},

	// sumOfAllEvenNumbersSquared: function (arr) {
 //
	// }

}

module.exports = arrayTasks
