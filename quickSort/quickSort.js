// Quick sort (recursive, divide and conquer)

var arrSize = 1000;
var maxValue = 2000;
var iterations = 10;

var comparisons;
var swaps;

var totalSwaps;
var totalComparisons;

function initializeCounters() {
	comparisons = 0;
	swaps = 0;
}

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

	swaps += 3;
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
		comparisons += 1;

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

function selectionSort(array) {
	var minPos;

	for (var i = 0; i < array.length - 1; i++) {
		minPos = i;

		for (var j = i + 1; j < array.length; j++) {
			comparisons += 1;

			if (array[j] < array[minPos]) {
				minPos = j;
			}
		}

		swap(array, i, minPos);
	}

	return array;
}

function simpleSearch(array, target) {
	for (var i = 0; i < array.length; i++) {
		comparisons += 1;

		if (array[i] == target) {
			return i;
		}
	}

	return -1;
}

function binarySearch(data, target) {
	comparisons = 0;

	var lo = 0;
	var hi = data.length - 1;

	var testAt;
	var testVal;

	while (lo <= hi) {
		testAt = ~~((lo + hi) / 2); // integer division
		testVal = data[testAt];

//		console.log("Looking for " + target + " - Found: " + testVal);

		if (testVal == target) {
			comparisons += 1;

			return testAt;
		} else if (testVal < target) {
			comparisons += 1;

			lo = testAt + 1;
		} else {
			hi = testAt - 1;
		}
	}

	return -1;
}

function dumpCounters() {
	console.log("Comparisons: " + comparisons);
	console.log("Swaps: " + swaps);
	console.log("");

	initializeCounters();
}

for (var loop = 0; loop < iterations; loop++) {
	var arr = generateArray();
	var target = getRandomInt(maxValue);

	console.log("Iteration: " + loop);

	var foundAt = simpleSearch(arr, target);

	if (foundAt !== -1) {
		console.log("Simple search found the result at pos: " + foundAt);
	} else {
		console.log("Simple search could not find the result!");
	}

	dumpCounters();

	console.log("Binary search w/ selection sort...");

	var selArr = selectionSort(arr);
	foundAt = binarySearch(arr, target);

        if (foundAt !== -1) {
                console.log("Binary search found the result at pos: " + foundAt);
        } else {
                console.log("Binary search could not find the result!");
        }

        dumpCounters();
}


