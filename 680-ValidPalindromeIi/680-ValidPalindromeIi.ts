// Last updated: 8/16/2025, 7:01:42 PM
// TypeScript

function validPalindrome(s: string): boolean {
    let l = 0;
    let r = s.length - 1;
    
    while (l < r) {
        if (s[l] !== s[r]) {
            return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
        }
        l++;
        r--;
    }
    return true;
}

function isPalindrome(s: string, l: number, r: number): boolean {
    while (l < r) {
        if (s[l] !== s[r]) return false;
        l++;
        r--;
    }
    return true;
}