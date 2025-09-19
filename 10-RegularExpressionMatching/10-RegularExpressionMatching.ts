// Last updated: 9/19/2025, 9:39:47 PM
function isMatch(s: string, p: string): boolean {
  return new RegExp(`^${p}$`).test(s);
}