// Last updated: 8/5/2025, 11:19:17 PM
function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>(nums);
    return (set.size < nums.length);
};