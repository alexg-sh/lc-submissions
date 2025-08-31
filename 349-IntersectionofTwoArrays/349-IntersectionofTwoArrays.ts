// Last updated: 8/31/2025, 12:22:02 PM
function intersection(nums1: number[], nums2: number[]): number[] {
    let nums1Set = new Set(nums1);
    let nums2Set = new Set(nums2);
    let ans = [];

    for (let num of nums1Set) {
        if (nums2Set.has(num)) {
            ans.push(num);
        }
    }
    return ans;
}
