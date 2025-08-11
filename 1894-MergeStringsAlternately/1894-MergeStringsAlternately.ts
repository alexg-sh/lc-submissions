// Last updated: 8/11/2025, 7:13:07 PM
function mergeAlternately(word1: string, word2: string): string {
  let i = 0, j = 0;
  const n1 = word1.length, n2 = word2.length;
  let out = "";

  while (i < n1 || j < n2) {
    if (i < n1) out += word1[i++];
    if (j < n2) out += word2[j++];
  }
  return out;
}
