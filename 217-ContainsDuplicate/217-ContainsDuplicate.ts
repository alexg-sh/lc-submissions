// Last updated: 9/10/2025, 2:55:27 PM
function containsDuplicate(nums: number[]): boolean {
    let sort = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) return true
    }
    return false
};