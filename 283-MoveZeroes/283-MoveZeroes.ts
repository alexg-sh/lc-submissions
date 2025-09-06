// Last updated: 9/6/2025, 10:15:57 PM
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
