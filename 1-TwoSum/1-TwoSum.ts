// Last updated: 9/4/2025, 10:22:40 PM
var twoSum = function(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i];
        if (seen.has(need)) {
            return [seen.get(need), i];
        }
        seen.set(nums[i], i);
    }
    return [];
};