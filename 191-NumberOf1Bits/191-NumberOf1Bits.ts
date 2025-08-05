// Last updated: 8/5/2025, 11:19:18 PM
function hammingWeight(n: number): number {
    let count: number = 0;

    while (n){
        count += (n & 1);
        n >>= 1;
    }
    return count;
};