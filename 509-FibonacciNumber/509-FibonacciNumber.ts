// Last updated: 9/24/2025, 10:41:55 PM
function fib(n: number): number {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n-1) + fib(n-2);
};