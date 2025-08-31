// Last updated: 8/31/2025, 2:18:54 PM
function isAnagram(s: string, t: string): boolean {
  // Check if both strings have the same length; if not, they can't be anagrams
  if (s.length !== t.length) {
    return false;
  }

  // Create an array to keep the count of each letter (26 for a-z) using Uint16Array for efficiency
  const counts = new Uint16Array(26);

  // Loop through each character in the strings
  for (let i = 0; i < s.length; i++) {
    // Increment the count for the character in s
    counts[s.charCodeAt(i) - 97]++;
    // Decrement the count for the character in t
    counts[t.charCodeAt(i) - 97]--;
  }

  // Check that all counts are zero, meaning both words have the exact same letter counts
  return counts.every((count) => count === 0);
}
