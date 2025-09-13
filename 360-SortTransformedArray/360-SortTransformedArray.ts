// Last updated: 9/13/2025, 10:55:05 PM
function sortTransformedArray(nums: number[], a: number, b: number, c: number): number[] {
  let arr: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    arr.push(a * nums[i] * nums[i] + b * nums[i] + c);
  }
  arr.sort((x, y) => x - y);
  return arr;
}
