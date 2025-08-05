// Last updated: 8/5/2025, 11:19:24 PM
function lengthOfLastWord(s: string): number {
    let arr: string[] = s.split(" ");
    // Loop backwards to find the last non-empty word
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== "") {
            return arr[i].length;
        }
    }
    return 0; // In case there are no words, safe fallback
}
