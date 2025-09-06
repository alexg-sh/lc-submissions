// Last updated: 9/6/2025, 5:59:14 PM
/**
 * Finds the maximum value in each sliding window of size k in the given array.
 * This uses a deque to efficiently keep track of maximums in O(n) time.
 */
function maxSlidingWindow(nums: number[], k: number): number[] {
    const n = nums.length;              // Get the length of the input array
    const result: number[] = [];        // Array to store the maximums for each window
    const deque: number[] = [];         // Deque to store indices of candidates for max in the current window

    // Loop through all elements in the array
    for (let i = 0; i < n; i++) {
        // Remove indices from the front if they are outside the current window of size k
        while (deque.length && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove from the back all indices whose values are less than nums[i]
        // because they can't be the maximum for this window or any future window
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Add the current index to the deque
        deque.push(i);

        // If we've filled the first k elements, add the maximum for the current window to result
        // The maximum is always at the front of the deque
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    // Return the array of window maximums
    return result;
}
