





For example, for an array like [1, 1, 1, 2, 1, 1, 1] and a test function function(n) {return n === 2}, the first element that is acceptable for this is the one at index 3, so all the elements before that need to be discarded, and the output should be the remaining elements [2, 1, 1, 1].

You should have a dropElements function that accepts an array (arr) and a function (func) as arguments.
The dropElements function should iterate through the array and remove elements starting from the first one until func returns true for an element.
The dropElements function should return the remaining elements in the array if the condition is met.
If the condition is never satisfied, it should return an empty array.