// Last updated: 9/8/2025, 5:28:42 PM
function singleNumber(nums: number[]): number {
    let res = 0;
    for (let n of nums) {
        res ^= n; // XOR each number
    }
    return res;
}
