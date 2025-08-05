// Last updated: 8/5/2025, 11:19:36 PM
function twoSum(nums: number[], target: number): number[] {
    const map: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }

    throw new Error("No two sum solution");
}