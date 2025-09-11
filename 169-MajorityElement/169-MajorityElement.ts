// Last updated: 9/11/2025, 10:28:25 PM
function majorityElement(nums: number[]): number {
    const counts: { [key: number]: number } = {};
    const majority = Math.floor(nums.length / 2);

    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > majority) {
            return num;
        }
    }
    return -1; 
}
