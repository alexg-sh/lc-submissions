// Last updated: 9/12/2025, 9:21:06 PM
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // p and q are both null
    if (p == null && q == null) return true;
    // one of p and q is null
    if (q == null || p == null) return false;
    if (p.val != q.val) return false;
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
}