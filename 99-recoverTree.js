// https://leetcode.com/problems/recover-binary-search-tree/

// 99. Recover Binary Search Tree
// You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

// Example 1:
// Input: root = [1,3,null,null,2]
// Output: [3,1,null,null,2]
// Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.

// Example 2:
// Input: root = [3,1,4,null,null,2]
// Output: [2,1,4,null,null,3]
// Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.


// 1. **In-Order Traversal**: In a Binary Search Tree (BST), an in-order traversal visits the nodes in ascending order. This property can be useful in identifying the misplaced nodes.

// 2. **Misplaced Nodes**: If the BST property is violated (i.e., a node is larger than the next one in an in-order traversal), then the current node is one of the nodes that was swapped. There could be two scenarios:
//     - If the two swapped nodes are adjacent in the in-order traversal of the BST, then you will encounter the anomaly once.
//     - If the two swapped nodes are not adjacent, then you will encounter the anomaly twice.

// 3. **Recovery**: Once you identify the two nodes that were swapped, you can recover the original BST by swapping the values of these two nodes back.

// Remember, the structure of the tree should not be changed, only the values of the nodes can be changed.


// class TreeNode {
//     constructor(val, left = null, right = null) {
//         this.val = val;
//         this.left = left;
//         this.right = right;
//     }
// }

// 1. **In-Order Traversal Function**:
// function inOrderTraversal(root, nodes = []) {
//     if (root) {
//         inOrderTraversal(root.left, nodes);
//         nodes.push(root);
//         inOrderTraversal(root.right, nodes);
//     }
//     return nodes;
// }

// 2. **Swap Function**:
// function swap(node1, node2) {
//     const temp = node1.val;
//     node1.val = node2.val;
//     node2.val = temp;
// }

// 3. **Find Swapped Nodes Function**:
// function findSwappedNodes(root) {
//     const nodes = inOrderTraversal(root);
//     let firstNode = null, lastNode = null;
//     for (let i = 0; i < nodes.length - 1; i++) {
//         if (nodes[i].val > nodes[i + 1].val) {
//             lastNode = nodes[i + 1];
//             if (!firstNode) {
//                 firstNode = nodes[i];
//             }
//         }
//     }
//     return [firstNode, lastNode];
// }

// 4. **Recover Tree Function**:
// function recoverTree(root) {
//     const [firstNode, lastNode] = findSwappedNodes(root);
//     swap(firstNode, lastNode);
// }


var recoverTree = function(root) {
    var firstNode = null;
    var secondNode = null;
    var prevNode = new TreeNode(-Number.MAX_VALUE);

    function inOrderTraversal(node) {
        if (node === null) {
            return;
        }
        inOrderTraversal(node.left);
        if (firstNode === null && prevNode.val >= node.val) {
            firstNode = prevNode;
        }
        if (firstNode !== null && prevNode.val >= node.val) {
            secondNode = node;
        }
        prevNode = node;
        inOrderTraversal(node.right);
    }

    inOrderTraversal(root);
    var temp = firstNode.val;
    firstNode.val = secondNode.val;
    secondNode.val = temp;
};
