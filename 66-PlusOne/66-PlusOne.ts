// Last updated: 10/23/2025, 12:09:54 AM
function plusOne(digits: number[]): number[] {
    let n = digits.length;
    for(let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    // If all digits are 9, we need an extra digit at the front
    digits.unshift(1);
    return digits;
}
