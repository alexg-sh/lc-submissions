// Last updated: 9/8/2025, 3:33:29 PM
function containsDuplicate(nums: number[]): boolean {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            return true
        }
    }
    return false

};