// Last updated: 8/5/2025, 11:19:21 PM
function isPalindrome(s: string): boolean {
    let filtered = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return filtered === filtered.split('').reverse().join('');
}
