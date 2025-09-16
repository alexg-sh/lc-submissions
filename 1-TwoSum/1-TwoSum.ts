// Last updated: 9/16/2025, 9:42:06 PM
function twoSum(nums: number[], target: number): number[] {
    const seen = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i];
        if (seen.has(need)) {
            return [seen.get(need)!, i];
        }
        seen.set(nums[i], i);
    }
    return [];
}