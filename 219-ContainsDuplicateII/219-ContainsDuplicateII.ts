// Last updated: 9/10/2025, 4:50:47 PM
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= i + k && j < nums.length; j++) {
            if (nums[i] == nums[j]) return true;
        }
    }
    return false;
}
