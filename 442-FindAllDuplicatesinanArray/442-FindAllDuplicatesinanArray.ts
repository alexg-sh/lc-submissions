// Last updated: 9/21/2025, 9:13:22 PM
function findDuplicates(nums: number[]): number[] {
    const res: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        const idx = Math.abs(nums[i]) - 1;
        if (nums[idx] < 0) {
            res.push(Math.abs(nums[i]));
        } else {
            nums[idx] = -nums[idx];
        }
    }
    return res;
}
