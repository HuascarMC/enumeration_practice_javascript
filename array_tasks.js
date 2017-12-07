var arrayTasks = {

	forEach: function(arr) {
		for(let item in array) {

		}
	},

	concat: function (arr1, arr2) {
			array = arr1.concat(arr2);
			return array;
	},

	insertAt: function (arr, itemToAdd, index) {
 		arr.splice(index, 0, itemToAdd);
			return arr;
	},

	square: function (arr) {
 	let newArray = arr.map(number => number * number)

		//  for(let number of arr) {
		// 		n = number * number;
		// 		newArray.push(n);
		// }
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

		arr.forEach( function(item) {
			if (newArray.includes(item) && !duplicatesArray.includes(item)){
				duplicatesArray.push(item);
			}
			newArray.push(item);
	});
		return duplicatesArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter(function (item) {
			return item !== valueToRemove
		})

		// for(let value of arr) {
		// 	if (value === valueToRemove) {
		// 		index = arr.indexOf(value);
		// 		arr.splice(index, 1);
		// 	}
		// }
		// return arr;
	},

	findIndexesOf: function (arr, itemToFind) {
		var newArray = [];
		index = 0;
 	arr.forEach( function(item) {
			if(item === itemToFind) {
				newArray.push(index);
		}
		index++;
	});
		return newArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
 	evenNumbers = [];
		squared = [];
		for(let item of arr) {
			if(item % 2 == 0) {
				evenNumbers.push(item);
			}
		}
		squared = this.square(evenNumbers);
		return this.sum(squared);
	}

}

module.exports = arrayTasks
