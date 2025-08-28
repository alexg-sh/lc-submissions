// Last updated: 8/28/2025, 12:21:03 PM
function isPalindrome(s: string): boolean {
    const cleanStr = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const revstr = cleanStr.split('').reverse().join('');
    return cleanStr === revstr;
}