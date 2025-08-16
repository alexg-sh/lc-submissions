// Last updated: 8/16/2025, 7:02:02 PM
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const array = [...nums1, ...nums2].sort((a, b) => a - b);
    const mid = Math.floor(array.length / 2);

    if (array.length % 2 === 0) {
        return (array[mid] + array[mid - 1]) / 2;
    } else {
        return array[mid];
    }
}