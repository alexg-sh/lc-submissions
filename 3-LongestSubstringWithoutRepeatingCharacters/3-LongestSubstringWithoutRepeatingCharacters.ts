// Last updated: 11/3/2025, 1:43:19 AM
function lengthOfLongestSubstring(s: string): number {
    let maxLen = 0;
    let left = 0;
    const seen = new Set<string>();

    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
