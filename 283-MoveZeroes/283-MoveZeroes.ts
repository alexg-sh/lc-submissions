// Last updated: 8/5/2025, 11:19:12 PM
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let nonzero = 0; // Pointer for non-zero elements

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[nonzero]] = [nums[nonzero], nums[i]];
            nonzero++;
        }
    }
}