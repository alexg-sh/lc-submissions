// Last updated: 8/5/2025, 11:19:12 PM
function topKFrequent(nums: number[], k: number): number[] {
    const count = new Map<number, number>();
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    const sorted = Array.from(count.entries()).sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, k).map(entry => entry[0]);
}
