// Last updated: 9/6/2025, 8:18:49 PM
function lengthOfLongestSubstringKDistinct(s: string, k: number): number {
    let start = 0, end = 0 // end exclusive

    const map = new Map<number, number>() // charCodeAt, count
    while (end < s.length) {
        const endCode = s.charCodeAt(end++)
        const endCount = map.get(endCode) || 0
        map.set(endCode, endCount + 1)

        if (map.size <= k) continue // contains at most k distinct characters

        const startCode = s.charCodeAt(start++)
        const startCount = map.get(startCode) || 1
        if (startCount === 1) map.delete(startCode)
        else map.set(startCode, startCount - 1)
    }

    return end - start
};
