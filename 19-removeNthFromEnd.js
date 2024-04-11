//https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// 19. Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]


class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let length = 0;
    let first = head;
    while (first != null) {
        length++;
        first = first.next;
    }
    length -= n;
    first = dummy;
    while (length > 0) {
        length--;
        first = first.next;
    }
    first.next = first.next.next;
    return dummy.next;
}

// function removeNthFromEnd(head, n) {
//     let dummy = new ListNode(0);
//     dummy.next = head;
//     let first = dummy;
//     let second = dummy;
//     for (let i = 1; i <= n + 1; i++) {
//         first = first.next;
//     }
//     while (first != null) {
//         first = first.next;
//         second = second.next;
//     }
//     second.next = second.next.next;
//     return dummy.next;
// }

function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    arr.forEach(val => {
        current.next = new ListNode(val);
        current = current.next;
    });
    return dummy.next;
}

function linkedListToArray(head) {
    let arr = [];
    let current = head;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

// Create a linked list from an array
let head = createLinkedList([1, 2, 3, 4, 5]);

// Call the function
let newHead = removeNthFromEnd(head, 2);

// Convert the result back to an array and print it
console.log(linkedListToArray(newHead));  // Output: [1, 2, 3, 5]


// 1. **Two-pass approach**: 
//     - First, you can traverse the linked list to find its length. 
//     - Then, subtract `n` from the length to find the position of the node to be removed from the beginning of the list. 
//     - Traverse the list again to reach that node and remove it.

// 2. **One-pass approach with two pointers**:
//     - You can maintain two pointers, `first` and `second`, where `first` is ahead of `second` by `n` nodes.
//     - Start both pointers from the beginning of the list. Move only the `first` pointer until it is `n` nodes apart from the `second` pointer.
//     - Then, move both pointers at the same speed. When the `first` pointer reaches the end, the `second` pointer will be at the node to be removed.

// Remember to handle edge cases, such as when the linked list has only one node, or when `n` is equal to the length of the linked list. In these cases, you would need to return an empty list or the head of the list respectively.
