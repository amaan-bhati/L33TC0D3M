class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function insertionSortList(head) {
    if (!head || !head.next) {
        return head; // If the list has 0 or 1 nodes, it's already sorted.
    }

    const dummy = new ListNode(-Infinity); // Create a dummy node to simplify insertion.
    let current = head;

    while (current) {
        const next = current.next; // Store the next node.

        // Find the correct position to insert the current node.
        let prev = dummy;
        while (prev.next && prev.next.val < current.val) {
            prev = prev.next;
        }

        // Insert the current node between prev and prev.next.
        current.next = prev.next;
        prev.next = current;

        current = next; // Move to the next unsorted node.
    }

    return dummy.next; // Return the sorted list starting from the first node after the dummy node.
}

// Helper function to convert an array to a linked list for testing.
function arrayToList(arr) {
    let head = null;
    let tail = null;
    
    for (const val of arr) {
        const newNode = new ListNode(val);
        if (!head) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
    }
    
    return head;
}

// Helper function to convert a linked list to an array for testing.
function listToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}
