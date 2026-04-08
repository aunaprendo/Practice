





rangeOfNumbers(3, 9) returns [3, 4, 5, 6, 7, 8, 9]
rangeOfNumbers(5, 5) returns [5]
Requirements:

Use recursion (the function must call itself)
No loops or array methods (for, while, Array.from, forEach, map, filter, reduce)

The function should return an array of integers that begins with the number represented by the startNum parameter and ends with the number represented by the endNum parameter (inclusive).
The startNum will always be less than or equal to the endNum.
Your function must use recursion by calling itself. It should not use any loop syntax (for, while, Array.from(), or higher-order functions such as forEach, map, filter, or reduce).
The function should handle the base case where startNum equals endNum by returning an array containing just that single number.
For the recursive case, the function should call itself with modified parameters to build the array, then add the current number to the result.
The function should not rely on global variables to cache or build the array.
