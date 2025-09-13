// Last updated: 9/13/2025, 10:54:59 PM
function sortTransformedArray(nums: number[], a: number, b: number, c: number): number[] {
    const n = nums.length;
    let res = new Array(n);
    let left = 0, right = n - 1;

    // Helper to calculate f(x)
    function quad(x: number): number {
        return a * x * x + b * x + c;
    }

    // If a >= 0, fill from the end; otherwise, fill from the start
    let index = a >= 0 ? n - 1 : 0;

    while (left <= right) {
        let leftVal = quad(nums[left]);
        let rightVal = quad(nums[right]);

        if (a >= 0) {
            // Bigger values are on the outside
            if (leftVal > rightVal) {
                res[index--] = leftVal;
                left++;
            } else {
                res[index--] = rightVal;
                right--;
            }
        } else {
            // Smaller values are on the outside
            if (leftVal < rightVal) {
                res[index++] = leftVal;
                left++;
            } else {
                res[index++] = rightVal;
                right--;
            }
        }
    }
    return res;
}
