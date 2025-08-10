// Last updated: 8/10/2025, 11:24:22 AM
function singleNumber(nums: number[]): number {
  let ans = 0;
  for (const num of nums) {
    ans ^= num;
  }
  return ans;
}