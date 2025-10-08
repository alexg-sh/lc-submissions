// Last updated: 10/8/2025, 10:29:55 PM
function firstUniqChar(s: string): number {
    // Create a map to store character counts
    const map = new Map<string, number>();

    // First pass: count occurrences of each character
    for (const c of s) {
        // If character c is already in the map, increment its count; otherwise, set it to 1
        map.set(c, (map.get(c) || 0) + 1);
    }

    // Second pass: find the first character with a count of 1 (unique)
    for (let i = 0; i < s.length; i++) {
        // If this character occurs only once, return its index
        if (map.get(s[i]) === 1) {
            return i;
        }
    }

    // If there is no unique character, return -1
    return -1;
};
