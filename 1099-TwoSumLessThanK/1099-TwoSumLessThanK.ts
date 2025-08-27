// Last updated: 8/27/2025, 9:49:55 PM
function twoSumLessThanK(nums: number[], k: number): number {
    let i = 0;
    let j = 0;
    let maxSum = -1;
    while(i < nums.length-1) {
        j = i+1;

        while(j< nums.length) {
            if((nums[i] + nums[j]) < k) {
                maxSum = Math.max((nums[i] + nums[j]), maxSum)
            }
            j++;
        }
        i++;
    }

    return maxSum;
};