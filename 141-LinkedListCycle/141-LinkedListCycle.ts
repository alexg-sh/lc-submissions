// Last updated: 9/9/2025, 10:56:21 PM
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    let set = new Set()
    while (head != null) {
        if (set.has(head)) return true
        set.add(head)
        head = head.next
    }
    return false
};