// Last updated: 8/30/2025, 11:22:21 PM
function threeSumClosest(nums: number[], target: number): number {
    // Step 1: Sort the array for the two-pointer approach
    nums.sort((a, b) => a - b);

    // Step 2: Initialize the closest sum with a value (initially sum of the first three)
    let closestSum = nums[0] + nums[1] + nums[2];

    // Step 3: Iterate through the array
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1; // Left pointer
        let right = nums.length - 1; // Right pointer

        // Step 4: Use two pointers to evaluate possible sums
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            // If the current sum is closer to the target, update closestSum
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            // Move pointers based on comparison to target
            if (currentSum < target) {
                left++; // Increase sum by moving left pointer right
            } else if (currentSum > target) {
                right--; // Decrease sum by moving right pointer left
            } else {
                // If exactly on target, it's the closest possible
                return currentSum;
            }
        }
    }

    // Step 5: Return the closest sum found
    return closestSum;
}
