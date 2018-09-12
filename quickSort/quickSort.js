// Quick sort (recursive, divide and conquer)

var arrSize = 10;
var maxValue = 2000;
var iterations = 10;

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function generateArray() {
	var array = new Array(arrSize);

	for (var i = 0; i < array.length; i++) {
		array[i] = getRandomInt(maxValue);
	}

	return array;
}

function quicksort(array) {
	if (array.length < 2) {
		return array;
	} else {
		var pivot = array[0];

		var less = [];
		var greater = [];

		for (var i = 1; i < array.length; i++) {
			var val = array[i];

			if (val <= pivot) {
				less.push(val);
			} else {
				greater.push(val);
			}
		}
	}

	return [].push.apply(less, [pivot], greater);
}

for (var loop = 0; loop < iterations; loop++) {
	var arr = generateArray();

	console.log("Iteration: " + loop);

	console.log("Initial Array: " + arr);
	console.log("Final Array: " + quicksort(arr));
}


