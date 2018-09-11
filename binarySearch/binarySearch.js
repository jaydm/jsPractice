// This will generate an array of 1000 random integers
// between 1 and 5000.
//
// Then, it will pick a random integer in the same
// range as the search target and perform a binary
// search to find it.
//
// Of course, a binary search requires a sorted target
// array.
//
// So, there will be a couple of elementary sorts
// tried out to determine how awful/great they are:
//
// 1) bubble - bubble the largest number to the top until the whole array is inspected and no swaps occurred
// 2) insertion - interate through the list from beginning to end allowing the inspected value to fall forward to it's sorted place
// 3) selection - interate through the list from the beginning...find the next lowest value and build a sorted list at the front
// 4) hybrid bubble - standard bubble plus keep drag smallest to the beginning

var comparisons = 0;
var swaps = 0;

var totalComparisons = 0;
var totalSwaps = 0;

function bubbleSort(array) {
	return sorted;
}

function insertionSort(array) {
	return sorted;
}

function selectionSort(array) {
	return sorted;
}

function hybridBubbleSort(array) {
	return sorted;
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function generateArray() {
	var array = new Array(1000);

	for (var i = 0; i < array.length; i++) {
		array[i] = getRandomInt(5000);
	}

	return array;
}

function simpleSearch(array, target) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] == target) {
			comparisons += 1;

			return i;
		}
	}

	return -1;
}

function binarySearch(array, target) {
	var lo = 0;
	var hi = array.length;

	var found = false;

	var testAt;
	var testVal;

	while (! found && (lo < hi) && (comparisons < array.length)) {
		testAt = (lo + hi) / 2; // integer division
		testVal = array[testAt];

		if (testVal == target) {
			comparisons += 1;

			found = testAt;
		} else if (testVal < target) {
			comparisons += 1;

			lo = testAt;
		} else {
			hi = testAt;
		}
	}

	if (found) {
		return found;
	} else {
		return -1;
	}
}

var iterations = 100;
var totalChecks = 0;
var misses = 0;

for (var loop = 0; loop < iterations; loop++) {
	var workWith = generateArray();

	var searchTarget = getRandomInt(5000);

	var foundAt = simpleSearch(workWith, searchTarget);
	
	if (foundAt == -1) {
		misses += 1;
		totalChecks += workWith.length;

//		console.log("Target (" + searchTarget + ") not found in array...");
	} else {
		totalChecks += foundAt;

//		console.log("Target (" + searchTarget + ") found at position: " + foundAt);
	}
}

console.log("After " + iterations + " iterations, we have performed a total of " + totalChecks + " tests to find a random search value");
console.log("Failed to find the number " + misses + " times...");
console.log("The average number of checks being: " + (totalChecks / iterations));

console.log("Simple test of binary search");

var binTestArr = [0,1,2,3,4,5,6,7,8,9];

comparisons = 0;
swaps = 0;

console.log("Search for 3...");
console.log("Found at: " + binarySearch(binTestArr, 3));
