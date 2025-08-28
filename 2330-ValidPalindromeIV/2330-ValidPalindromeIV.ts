// Last updated: 8/28/2025, 11:12:08 PM
function makePalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;
    let mismatches = 0;

    while (left < right) {
        if (s[left] !== s[right]) {
            mismatches++; // Count the mismatched pair
        }
        left++;
        right--;
    }

    return mismatches <= 2;
}
