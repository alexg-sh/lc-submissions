// Last updated: 8/12/2025, 8:44:15 PM
function longestPalindrome(s: string): string {
    let res = ""
    let resLen = 0
    function check(l:number,r:number) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            if ((r - l + 1) > resLen) {
                res = s.substring(l, r + 1)
                resLen = r - l + 1
            }
            l = l - 1
            r = r + 1
        }
    }
    for (let i = 0; i < s.length; i++) {
        check(i,i)
        check(i,i+1)
    }
    return res
};