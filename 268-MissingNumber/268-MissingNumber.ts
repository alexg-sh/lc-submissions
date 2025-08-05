// Last updated: 8/5/2025, 11:19:14 PM
function missingNumber(nums: number[]): number {
    let expectedSum = 0;
    let foundSum = 0;

    for (let i = 0; i < nums.length; i++) {
        expectedSum += i + 1;
        foundSum += nums[i];
    }

    return expectedSum - foundSum;
};