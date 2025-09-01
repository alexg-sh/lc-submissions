// Last updated: 9/1/2025, 10:41:09 PM
function maxSubArray(nums: number[]): number {
    // Initialize two variables with the first element of the array:
    // currentSum keeps the running sum for the current subarray
    // maxSum stores the maximum subarray sum found so far
    let currentSum = nums[0];
    let maxSum = nums[0];

    // Iterate through the array, starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Decide whether to add nums[i] to the existing subarray (currentSum)
        // or start a new subarray from nums[i] itself.
        // Take the maximum of the two as the new currentSum.
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update maxSum if currentSum is greater.
        maxSum = Math.max(maxSum, currentSum);
    }

    // Return the largest sum found
    return maxSum;
}
