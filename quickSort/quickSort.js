// Quick sort (recursive, divide and conquer)

var arrSize = 10000;
var maxValue = 5000;
var iterations = 10000;

var targets = [];

var comparisons;
var swaps;

var totalSwaps;
var totalComparisons;

function initializeTotals() {
	totalComparisons = 0;
	totalSwaps = 0;
}

function initializeCounters() {
	totalComparisons += comparisons;
	totalSwaps += swaps;

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

	comparisons += 1;

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
	var lo = 0;
	var hi = data.length - 1;

	var testAt;
	var testVal;

	while (lo <= hi) {
		testAt = ~~((lo + hi) / 2); // integer division
		testVal = data[testAt];

		comparisons += 1;

		if (testVal == target) {
			return testAt;
		} else if (testVal < target) {
			comparisons += 1;

			lo = testAt + 1;
		} else {
			comparisons += 1;

			hi = testAt - 1;
		}
	}

	return -1;
}

function dumpCounters(iterationNumber) {
	console.log("Comparisons: " + comparisons);
	console.log("Swaps: " + swaps);
	console.log("");

	initializeCounters();

	console.log("Average comparisons: " + (totalComparisons / iterationNumber));
	console.log("Average swaps: " + (totalSwaps / iterationNumber));
	console.log("");
}

var arr = generateArray();

initializeCounters();
initializeTotals();

var sortedArr = selectionSort(arr);

dumpCounters(1);

initializeCounters();
initializeTotals();

sortedArr = quicksort(arr);

dumpCounters(1);

initializeCounters();
initializeTotals();

for (var loop = 0; loop < iterations; loop++) {
	var target = getRandomInt(maxValue);

	targets.push(target);

	var foundAt = simpleSearch(arr, target);

	initializeCounters();
}

console.log("Simple search results (" + iterations + ") iterations");
dumpCounters(iterations);

initializeCounters();
initializeTotals();

for (var loop = 0; loop < iterations; loop++) {
	var target = targets[loop];

	var foundAt = binarySearch(sortedArr, target);

	initializeCounters();
}

console.log("Binary search results (" + iterations + ") iterations");
dumpCounters(iterations);
