// Last updated: 8/31/2025, 12:47:25 PM
function isAnagram(s: string, t: string): boolean {
   return s.split("").sort().join() === t.split("").sort().join();
};