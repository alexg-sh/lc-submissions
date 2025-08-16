// Last updated: 8/16/2025, 10:30:33 PM
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null
    let curr = head

    while (curr) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
};