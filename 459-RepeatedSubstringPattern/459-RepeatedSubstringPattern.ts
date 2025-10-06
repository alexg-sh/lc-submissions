// Last updated: 10/6/2025, 11:10:02 PM
function repeatedSubstringPattern(s: string): boolean {
    const double = s+s;
    const trim = double.slice(1,double.length - 1)
    return trim.includes(s)
};