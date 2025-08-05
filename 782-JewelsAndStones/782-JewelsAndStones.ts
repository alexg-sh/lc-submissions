// Last updated: 8/5/2025, 11:19:10 PM
function numJewelsInStones(jewels: string, stones: string): number {
  // turn jewels into a Set for O(1) lookup
  const jewelSet = new Set(jewels.split(""));
  let count = 0;
  for (const stone of stones) {
    if (jewelSet.has(stone)) count++;
  }
  return count;
}
