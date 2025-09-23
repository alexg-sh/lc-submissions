// Last updated: 9/23/2025, 8:46:28 PM
function longestPalindrome(s: string): number {
    const charsMap = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        charsMap.set(s[i], (charsMap.get(s[i]) ?? 0) + 1);
    }

    let oddCounter = 0;
    for (const val of charsMap.values()) {
        if (val % 2 === 1) {
            oddCounter++;
        }
    }
    return oddCounter === 0 ? s.length : s.length - (oddCounter - 1);
}
