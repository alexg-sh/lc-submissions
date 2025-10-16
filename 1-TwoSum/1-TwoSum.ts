// Last updated: 10/17/2025, 12:32:45 AM
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