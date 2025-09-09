// Last updated: 9/9/2025, 7:35:46 PM
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

function reverseList(head: ListNode | null): ListNode | null {
    let currentNode = head;
    let previousNode = null;

    while (currentNode) {
        const nextNode = currentNode.next;

        currentNode.next = previousNode;
        previousNode = currentNode;

        if (!nextNode) return currentNode;

        currentNode = nextNode;
    }
    return currentNode;
};