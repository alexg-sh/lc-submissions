// Last updated: 9/25/2025, 8:51:47 PM
function dominantIndex(nums: number[]): number {
    // Step 1: Find largest number and its index
    let maxNum = 0;
    let maxIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxNum) {
            maxNum = nums[i];
            maxIndex = i;
        }
    }

    // Step 2: Check the condition for all other numbers
    for (let i = 0; i < nums.length; i++) {
        if (i !== maxIndex && maxNum < nums[i] * 2) {
            return -1;
        }
    }

    // Step 3: If all passed, return index
    return maxIndex;
};
