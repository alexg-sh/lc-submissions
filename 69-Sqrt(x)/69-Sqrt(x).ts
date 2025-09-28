// Last updated: 9/28/2025, 11:28:56 PM
function mySqrt(x: number): number {
    let left: number = 1;
    let right: number = x;

    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2);

        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};