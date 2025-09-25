// Last updated: 9/25/2025, 8:45:35 PM
function dominantIndex(nums: number[]): number {
    let largestNum = Math.max(...nums); // find largest number
    let largestNumIndex = nums.indexOf(largestNum); // find its index

    for (let i = 0; i < nums.length; i++) {
        if (i !== largestNumIndex && largestNum < nums[i] * 2) {
            return -1; // if largestNum not at least twice as big as nums[i]
        }
    }
    return largestNumIndex; // if it passed for all other numbers
}
