// This will generate an array of 1000 random integers
// between 1 and 5000.
//
// Then, it will pick a random integer in the same
// range as the search target and perform a simple
// search to find it.

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
			return i;
		}
	}

	return -1;
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

		console.log("Target (" + searchTarget + ") not found in array...");
	} else {
		totalChecks += foundAt;

		console.log("Target (" + searchTarget + ") found at position: " + foundAt);
	}
}

console.log("After " + iterations + " iterations, we have performed a total of " + totalChecks + " tests to find a random search value");
console.log("Failed to find the number " + misses + " times...");
console.log("The average number of checks being: " + (totalChecks / iterations));


