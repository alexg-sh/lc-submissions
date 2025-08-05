// Last updated: 8/5/2025, 11:19:30 PM
function generateParenthesis(n: number): string[] {
    const results: string[] = [];
    
    function backtrack(current: string, open: number, close: number) {
        if (current.length === n * 2) {
            results.push(current);
            return;
        }
        if (open < n) {
            backtrack(current + '(', open + 1, close);
        }
        if (close < open) {
            backtrack(current + ')', open, close + 1);
        }
    }
    
    backtrack('', 0, 0);
    return results;
}
