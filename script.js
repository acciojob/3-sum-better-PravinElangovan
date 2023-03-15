function threeSum(arr, target) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Initialize the result to the sum of the first three elements
  let result = arr[0] + arr[1] + arr[2];

  // Iterate over all possible three-element combinations
  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1; // Start of the second subarray
    let k = arr.length - 1; // End of the third subarray

    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];

      // If the current sum is closer to the target than the previous closest sum, update the result
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }

      // Move j and k towards each other based on the current sum
      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  // Return the result
  return result;
}


module.exports = threeSum;
