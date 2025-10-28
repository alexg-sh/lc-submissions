// Last updated: 10/28/2025, 3:20:43 PM
function strStr(haystack: string, needle: string): number {
    // Edge case: if needle is empty, return 0 as per the problem statement
    if (needle.length === 0) return 0;

    // Loop through the haystack up to the point where needle could still fully fit
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        // Check if substring from i matches the needle
        if (haystack.substring(i, i + needle.length) === needle) {
            return i; // Return index if match found
        }
    }
    return -1; // Return -1 if no match found
}
