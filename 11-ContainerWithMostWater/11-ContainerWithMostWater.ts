// Last updated: 8/5/2025, 11:19:34 PM
function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        // Calculate area
        const width = right - left;
        const h = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, width * h);

        // Move the pointer pointing at the smaller height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}
