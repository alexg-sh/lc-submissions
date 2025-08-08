// Last updated: 8/8/2025, 9:19:00 PM
function strStr(haystack: string, needle: string): number {
    let m = needle.length;
    let n = haystack.length;

    for (let windowStart = 0; windowStart <= n - m; windowStart++) {
        for (let i = 0; i < m; i++) {
            if (needle[i] != haystack[windowStart + i]) {
                break;
            }
            if (i == m - 1) {
                return windowStart;
            }
        }
    }
    return -1;
};