// Last updated: 9/5/2025, 7:41:54 PM
function maxSlidingWindow(nums: number[], k: number): number[] {
    const n = nums.length;
    const result: number[] = [];
    const deque: number[] = []; // Will store indices

    for (let i = 0; i < n; i++) {
        // Remove indices going out of the window
        while (deque.length && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove indices whose corresponding values are less than nums[i]
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // Add current index
        deque.push(i);

        // The front of the deque is the max in the window
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}
