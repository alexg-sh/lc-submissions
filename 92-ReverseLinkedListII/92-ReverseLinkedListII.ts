// Last updated: 9/9/2025, 10:21:43 PM
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    // If the list is empty or left and right are the same, nothing to reverse, so return head
    if (!head || left === right) return head;

    // Initialize a counter to track current node's position
    let count = 1;

    // Create a dummy node before head to simplify edge cases where left is 1
    let pseudoHead = new ListNode();
    pseudoHead.next = head;

    // prev points to the node before the current node (starts at pseudoHead)
    let prev = pseudoHead;

    // curr is the node we are currently processing (starts at head)
    let curr = head;

    // next will store the next node during iteration
    let next: ListNode | null;

    // joinFromLeft will link to the head of the reversed part
    let joinFromLeft: ListNode | null;

    // joinToRight will become the tail of the reversed part
    let joinToRight: ListNode | null;

    // Process nodes until we reach the 'right' position
    while (curr && count <= right) {
        // Store next node reference before changing pointers
        next = curr.next;

        // When reaching the left position, mark the nodes to connect after reversal
        if (count === left) {
            joinFromLeft = prev;  // Node before reversal starts
            joinToRight = curr;   // First node to reverse, becomes tail after reversal
        }

        // Reverse pointers between left and right inclusively
        if (count >= left) {
            curr.next = prev;
        }

        // Move prev and curr forward
        prev = curr;
        curr = next;
        count++;
    }

    // Connect node before left to the new head of reversed sublist
    joinFromLeft.next = prev;

    // Connect the tail of reversed sublist to the rest of the list
    joinToRight.next = curr;

    // Return new head (skipping the dummy node)
    return pseudoHead.next;
}
