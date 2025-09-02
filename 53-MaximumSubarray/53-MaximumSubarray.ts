// Last updated: 9/2/2025, 10:28:33 PM
function maxSubArray(nums: number[]): number {
    let maxSum = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        maxSum = Math.max(sum, maxSum);
        if (sum < 0) {
            sum = 0;
        }

    }

    return maxSum;
};