// Last updated: 10/8/2025, 10:28:08 PM
function firstUniqChar(s: string): number {
    const map = new Map<string, number>();

    for (const c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }
    return -1
};