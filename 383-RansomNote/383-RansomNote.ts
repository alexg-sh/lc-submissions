// Last updated: 10/7/2025, 11:15:42 PM
function canConstruct(ransomNote: string, magazine: string): boolean {
    const charMap = new Map<string, number>();

    for (const char of magazine) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    for (const char of ransomNote) {
        if (!charMap.has(char) || charMap.get(char)! <= 0) return false;
        charMap.set(char, charMap.get(char)! - 1);
    }

    return true;
};