// Last updated: 9/21/2025, 8:57:44 PM
function findDisappearedNumbers(nums: number[]): number[] {
    let sort = nums.sort((a,b) => a - b);
    let set = new Set(sort);
    let ans = [];

    let min = Math.min(...nums);
    let max = Math.max(...nums);

    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            ans.push(i);
        }
    }
    return ans
};