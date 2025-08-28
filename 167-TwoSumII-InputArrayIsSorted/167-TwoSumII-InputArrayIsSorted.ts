// Last updated: 8/28/2025, 4:10:59 PM
function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            // Return 1-based indices
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    // No solution case (shouldn't happen as per problem description)
    return [];
}
