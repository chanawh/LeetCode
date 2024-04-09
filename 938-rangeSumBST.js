function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  
  function rangeSumBST(root, low, high) {
    if (!root) return 0;
  
    // Explore right subtree if root value is less than low
    if (root.val < low) {
      return rangeSumBST(root.right, low, high);
    }
  
    // Explore left subtree if root value is greater than high
    if (root.val > high) {
      return rangeSumBST(root.left, low, high);
    }
  
    // Root value is within range, add it and explore both subtrees
    return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
  }
  
  // Create a sample BST
  const root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(15);
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(7);
  root.right.right = new TreeNode(18);
  
  // Set the range
  const low = 7;
  const high = 15;
  
  // Calculate and print the range sum
  const sum = rangeSumBST(root, low, high);
  console.log("Range Sum of BST between", low, "and", high, ":", sum);
  