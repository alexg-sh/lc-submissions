// Last updated: 9/8/2025, 7:30:27 PM
function moveZeroes(nums: number[]): void {
    let nonzero = 0; // Pointer for non-zero elements

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap non-zero element with the element at `nonzero`
            [nums[i], nums[nonzero]] = [nums[nonzero], nums[i]];
            nonzero++;
        }
    }
}