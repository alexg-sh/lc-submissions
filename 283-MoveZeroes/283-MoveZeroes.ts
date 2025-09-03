// Last updated: 9/3/2025, 11:18:54 PM
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let insertPos = 0;
    for (let num of nums) {
        if (num !== 0) {
            nums[insertPos++] = num;
        }
    }
    while (insertPos < nums.length) {
        nums[insertPos++] = 0;
    }
}
