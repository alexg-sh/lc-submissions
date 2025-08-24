// Last updated: 8/24/2025, 2:45:32 PM
function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>(nums);
    return (set.size < nums.length);
};