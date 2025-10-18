// Last updated: 10/18/2025, 9:31:57 PM
function hammingWeight(n: number): number {
    let count: number = 0;

    while (n){
        count += (n & 1);
        n >>= 1;
    }
    return count;
};