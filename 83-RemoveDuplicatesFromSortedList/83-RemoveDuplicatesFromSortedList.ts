// Last updated: 8/5/2025, 11:19:23 PM
function deleteDuplicates(head: ListNode | null): ListNode | null {
    let current = head;
    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}
