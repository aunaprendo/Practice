


In this lab, you will build a permutation generator that will take a string and return all possible permutations of the characters in the string. For example, the possible permutations of the string cat are cat, cta, act, atc, tac, and tca.

The recursive way of creating permutations of a string works by storing the fixed starting part of the string (prefix), and creating permutations of the rest.

For example, let's consider the word machine. The first round of creating permutations would be made fixing the m as the prefix of the string, and then creating permutations of the rest of the string, achine.

For the rest of the string, permutations continue in the same way. One letter is added to the prefix, maybe the c, so the prefix becomes mc. Then, each of the permutations of ahine is concatenated to the prefix.




Iterate over each character in the input string and for each iteration, remove the current character from the string and call the permuteString function recursively with updated arguments to build the remaining permutations.
You should return the final results array.
You should ensure that the permutations are unique by removing duplicates.
function permute(arr) {
  if (arr.length === 0) return [[]];

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    let remaining = arr.slice(0, i).concat(arr.slice(i + 1));

    let remainingPermutations = permute(remaining);

    for (let perm of remainingPermutations) {
      result.push([current, ...perm]);
    }
  }

  return result;
}

console.log(permute(['a', 'b', 'c']));


function permute(arr) {
  if (arr.length <= 1) return [arr];

  let result = [];

  arr.forEach((item, index) => {
    const remaining = [
      ...arr.slice(0, index),
      ...arr.slice(index + 1)
    ];

    const perms = permute(remaining);

    perms.forEach(perm => {
      result.push([item, ...perm]);
    });
  });

  return result;
}