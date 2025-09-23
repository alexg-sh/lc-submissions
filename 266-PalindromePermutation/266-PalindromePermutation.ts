// Last updated: 9/23/2025, 7:45:35 PM
function canPermutePalindrome(s: string): boolean {
    const LOWER_A = "a".charCodeAt(0);
    let mask = 0;
    for (let i = 0; i < s.length; ++i){
         mask ^= 1 << (s.charCodeAt(i) - LOWER_A);
    }
    return (mask & (mask - 1)) === 0;
};