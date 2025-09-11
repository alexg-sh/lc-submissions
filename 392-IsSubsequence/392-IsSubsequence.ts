// Last updated: 9/11/2025, 9:31:34 PM
function isSubsequence(s: string, t: string): boolean {

    let i = 0;

    for (let char of t) {
        if (s[i] === char) {
            i++
        }
    }
    return i === s.length;
};