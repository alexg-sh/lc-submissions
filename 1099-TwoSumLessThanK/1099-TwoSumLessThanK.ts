// Last updated: 8/27/2025, 9:43:45 PM
function twoSumLessThanK(nums: number[], k: number): number {
    let max = -1;
    let l = 0;
    let r = nums.length - 1;
    
    nums.sort((a, b) => a - b);

    while (l < r) {
        const sum = nums[l] + nums[r];

        max < sum && sum < k && (max = sum);
        sum >= k ? r -= 1 : l += 1;
    }

    return max;
};