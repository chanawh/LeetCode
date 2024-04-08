// 2. Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


// We are given two linked lists, where each node represents a digit in a non-negative integer. We need to add these integers and return the sum as a new linked list, maintaining the reverse digit order.


// Iterate through both linked lists simultaneously.
// At each step, add the values of the current nodes in both lists, considering any carry-over from the previous addition.
// Create a new node with the sum as its value and add it to the resulting linked list.
// Handle potential edge cases like unequal list lengths and carry-over for the final digit.


// We can either modify the existing linked lists (not recommended) or create a new linked list to store the sum.
// This solution will create a new linked list for the sum.


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0); // Define a dummyHead node for the resulting linked list, which helps simplify handling the first node creation.
    let carry = 0; // Initialize a carry variable to store any carry-over from the previous addition.
    let curr = dummyHead;

    // Enter a while loop that continues as long as any of these conditions are true:
    // l1 is not null (meaning there are more digits in the first list).
    // l2 is not null (meaning there are more digits in the second list).
    // carry has a value (meaning there's a carry-over to be added).
    while (l1 || l2 || carry) {
        let sum = (l1?.val || 0) + (l2?.val || 0) + carry; // Calculate the sum by adding the values of the current nodes in both lists (l1.val and l2.val) and any existing carry-over.
        carry = Math.floor (sum / 10); // Use integer division (Math.floor(sum / 10)) to extract the carry-over for the next digit.
        curr.next = new ListNode(sum % 10); // Create a new node with the current digit (sum % 10) and append it to the resulting linked list using curr.next.
        curr = curr.next; // Update curr to point to the newly created node for further additions.

        // Move l1 and l2 to their respective next nodes (if they exist) for the next iteration.
        l1 = l1?.next; 
        l2 = l2?.next; 
    }

    return dummyHead.next; // Return the dummyHead.next, which points to the actual head of the resulting linked list (excluding the dummy node).
}
function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  function createList(arr) {
    // Creates a linked list from an array of values
    let head = null;
    let current = null;
    for (const num of arr) {
      const newNode = new ListNode(num);
      if (!head) {
        head = newNode;
      } else {
        current.next = newNode;
      }
      current = newNode;
    }
    return head;
  }
  
  function printList(head) {
    // Prints the values of nodes in a linked list
    let current = head;
    while (current) {
      console.log(current.val, "->");
      current = current.next;
    }
    console.log("NULL");
  }
  
  function addTwoNumbers(l1, l2) {
    // ... (existing addTwoNumbers function code)
  }
  
  // Test Cases
  const list1_1 = createList([2, 4, 3]);
  const list2_1 = createList([5, 6, 4]);
  const expected_1 = createList([7, 0, 8]);
  
  const list1_2 = createList([0]);
  const list2_2 = createList([0]);
  const expected_2 = createList([0]);
  
  const list1_3 = createList([9, 9, 9, 9, 9, 9, 9]);
  const list2_3 = createList([9, 9, 9, 9]);
  const expected_3 = createList([8, 9, 9, 9, 0, 0, 0, 1]);
  
  console.log("Test Case 1:");
  printList(list1_1);
  printList(list2_1);
  printList(addTwoNumbers(list1_1, list2_1));
  console.log("Expected:");
  printList(expected_1);
  
  console.log("Test Case 2:");
  printList(list1_2);
  printList(list2_2);
  printList(addTwoNumbers(list1_2, list2_2));
  console.log("Expected:");
  printList(expected_2);
  
  console.log("Test Case 3:");
  printList(list1_3);
  printList(list2_3);
  printList(addTwoNumbers(list1_3, list2_3));
  console.log("Expected:");
  printList(expected_3);
  