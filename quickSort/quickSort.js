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

// helper function to perform the swap
function swap(array, i, j) {
	var hold = array[i];

	array[i] = array[j];
	array[j] = hold;
}

// this is an in-place function that runs within the
// passed in array moving every element that is
// less than the value in the pivot element which in
// this implementation is the last value in the range.
// which is the reason for the final swap moving the
// rightmost element of the range into the position
// just to the right of the subarray built up of
// elements less than the pivot value. If the
// implementation were using a different element as
// the pivot value - then the last swap would need
// to be adjusted accordingly
function partition(array, pivot, left, right) {
	var pivotValue = array[pivot];
	var partitionIndex = left;

	for (var i = left; i < right; i++) {
		if (array[i] < pivotValue) {
			swap(array, i, partitionIndex);
			partitionIndex++;
		}
	}

	swap(array, right, partitionIndex);

	return partitionIndex;
}

function quicksort(array, left, right) {
	if (typeof left == "undefined") {
		left = 0;
		right = array.length -1;
	}

	if (typeof right == "undefinded") {
		right = array.length - 1;
	}

	if (left < right) {
		var pivot = right;
		var partitionIndex = partition(array, pivot, left, right);

		quicksort(array, left, partitionIndex - 1);
		quicksort(array, partitionIndex + 1, right);
	}

	return array;
}

for (var loop = 0; loop < iterations; loop++) {
	var arr = generateArray();

	console.log("Iteration: " + loop);

	console.log("Initial Array: " + arr);
	console.log(" Final Array: " + quicksort(arr));
}


