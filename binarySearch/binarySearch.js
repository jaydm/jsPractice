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

var iterations = 10000;
var arrayLength = 1000;
var maxValue = 2000;

var guesses = [];

function bubbleSort(array) {
	console.log("Bubble sorting...");

	var hold;

	for (var i = 0; i < array.length - 2; i++) {
		for (var j = i; j < array.length - 2; j++) {
			comparisons += 1;

			if (array[j] > array[j + 1]) {
				hold = array[j];
				array[j] = array[j + 1];
				array[j + 1] = hold;

				swaps += 3
			}
		}
	}

	return array;
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
	var array = new Array(arrayLength);

	for (var i = 0; i < array.length; i++) {
		array[i] = getRandomInt(maxValue);
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

var totalChecks = 0;
var misses = 0;

var workWith = generateArray();

for (var loop = 0; loop < iterations; loop++) {
	var searchTarget = getRandomInt(maxValue);

	guesses[guesses.length] = searchTarget;

	var foundAt = simpleSearch(workWith, searchTarget);
	
	if (foundAt == -1) {
		misses += 1;
		totalChecks += workWith.length;
	} else {
		totalChecks += foundAt;
	}
}

console.log("Simple search....");

console.log("After " + iterations + " iterations, we have performed a total of " + totalChecks + " tests to find a random search value");
console.log("Failed to find the number " + misses + " times...");
console.log("The average number of checks being: " + (totalChecks / iterations));


totalComparisons = 0;
totalSwaps = 0;

comparisons = 0;
swaps = 0;

console.log("Sort array....");

var binTestArr = bubbleSort(workWith); // bubble sort array

totalComparisons += comparisons;
totalSwaps += swaps;

console.log("Binary search....");

misses = 0;

for (var loop = 0; loop < iterations; loop++) {
	var searchTarget = guesses[loop];

	if (binarySearch(binTestArr, searchTarget) == -1) {
		misses += 1;
	}

	totalComparisons += comparisons;
}

console.log("After " + iterations + " iterations, we have performed a total of " + totalComparisons + " tests to find a random search value");
console.log("Failed to find the number " + misses + " times...");
console.log("The average number of checks being: " + (totalComparisons / iterations));
console.log("Besides the additional comparisons...The sort generated " + totalSwaps + " swaps");
console.log("That makes " + (totalSwaps / iterations) + " swaps per search");
