// Last updated: 8/23/2025, 9:44:26 PM
function twoSum(nums: number[], target: number): number[] {
    const hashmap: Record<number, number> = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (hashmap.hasOwnProperty(diff)) {
            return [hashmap[diff], i];
        }
        hashmap[nums[i]] = i;
    }
    return[];
}
