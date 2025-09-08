// Last updated: 9/8/2025, 3:56:13 PM
function missingNumber(nums: number[]): number {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
    return nums.length; // edge case: missing number is n
}
