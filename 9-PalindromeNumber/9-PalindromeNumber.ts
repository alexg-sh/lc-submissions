// Last updated: 8/15/2025, 4:10:09 PM
function isPalindrome(x: number): boolean {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    let reversed = 0;
    let original = x;
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return original === reversed;
}
