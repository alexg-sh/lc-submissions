// Last updated: 9/10/2025, 11:17:37 AM
function reverseList(head: ListNode | null): ListNode | null {
    let curr = head;      // Pointer to scan through the list
    let prev = null;      // This will eventually become the new head

    while (curr) {
        let next = curr.next;   // Save the next node
        curr.next = prev;       // Reverse the link
        prev = curr;            // Move prev one step forward
        curr = next;            // Move curr one step forward
    }

    return prev; // At the end, prev is the new head
}
