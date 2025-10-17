// Last updated: 10/17/2025, 11:07:36 PM
/**
 * Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // k points to the last position in nums1 where a value can be placed (end of merged array)
    let k: number = m + n - 1;
    // i points to the last initialized element in nums1 (end of first sorted part)
    let i: number = m - 1;
    // j points to the last element in nums2 (end of second sorted array)
    let j: number = n - 1;
    
    // Loop as long as there are still elements in nums2 to merge
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            // If nums1[i] is bigger, place it at the end of nums1 (at position k)
            nums1[k] = nums1[i];
            // Move i to the left (next biggest in nums1)
            i--;
        } else {
            // Otherwise, place nums2[j] at position k in nums1
            nums1[k] = nums2[j];
            // Move j to the left (next biggest in nums2)
            j--;
        }
        // Move k to the left for the next placement
        k--
    }
};
