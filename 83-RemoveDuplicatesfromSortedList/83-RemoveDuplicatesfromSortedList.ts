// Last updated: 10/2/2025, 4:13:14 PM
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
