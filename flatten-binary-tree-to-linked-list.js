function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function flatten(root) {
    if (root === null) return;

    // Save the right subtree
    let right = root.right;

    // Flatten the left subtree
    flatten(root.left);

    // Attach the flattened left subtree to the right
    root.right = root.left;
    root.left = null;

    // Find the rightmost node and attach the saved right subtree
    let current = root;
    while (current.right !== null) {
        current = current.right;
    }
    current.right = right;

    // Continue flattening the right subtree
    flatten(right);
}

