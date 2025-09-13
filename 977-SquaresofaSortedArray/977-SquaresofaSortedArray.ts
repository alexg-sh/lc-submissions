// Last updated: 9/13/2025, 10:41:00 PM
function sortedSquares(nums: number[]): number[] {
    let list: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        list.push(nums[i] * nums[i])
    }
    return list.sort((a, b) => a - b)
};