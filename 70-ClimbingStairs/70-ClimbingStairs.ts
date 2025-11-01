// Last updated: 11/1/2025, 9:37:38 PM
function climbStairs(n: number): number {
    if (n <= 1) {
        return 1; // Base cases
    }

    const dp: number[] = [1, 1];

    for (let i = 2; i <= n; i++) {
        dp[i % 2] = dp[(i - 1) % 2] + dp[(i - 2) % 2];
    }

    return dp[n % 2];
}