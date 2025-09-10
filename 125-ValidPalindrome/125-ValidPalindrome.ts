// Last updated: 9/10/2025, 5:43:07 PM
function isPalindrome(s: string): boolean {
    const newStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return newStr === newStr.split('').reverse().join('');
};