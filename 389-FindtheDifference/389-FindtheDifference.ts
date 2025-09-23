// Last updated: 9/23/2025, 8:23:32 PM
function findTheDifference(s: string, t: string): string {
    let charCode = t.charCodeAt(0)

    for (let i = 0; i < s.length; i++) {
        charCode += t.charCodeAt(i+1) - s.charCodeAt(i)
    };
    return String.fromCharCode(charCode)
};