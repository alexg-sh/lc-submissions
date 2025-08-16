// Last updated: 8/16/2025, 7:01:49 PM
function reverseWords(s) {
    let words = [];
    let i = s.length - 1;
    while (i >= 0) {
        while (i >= 0 && s[i] === ' ') i--; // Skip spaces
        if (i < 0) break;
        let j = i;
        while (i >= 0 && s[i] !== ' ') i--;
        words.push(s.substring(i + 1, j + 1));
    }
    return words.join(' ');
}
