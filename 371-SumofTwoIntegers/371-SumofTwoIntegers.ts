// Last updated: 9/19/2025, 12:30:27 AM
function getSum(a: number, b: number): number {
    while (b != 0) {
        let carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
};