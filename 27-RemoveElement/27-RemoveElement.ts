// Last updated: 9/7/2025, 7:50:28 PM
function removeElement(nums: number[], val: number): number {
    let k: number = 0;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};