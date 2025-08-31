// Last updated: 8/31/2025, 11:29:28 PM
function sortedSquares(nums: number[]): number[] {
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        let squared = [nums[i] * nums[i]]
        arr.push(...squared)
    }
   arr = arr.sort((a, b) => a - b);
   return arr
};