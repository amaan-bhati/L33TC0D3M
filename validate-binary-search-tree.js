function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function isValidBST(root) {
    function inorderTraversal(node, lower, upper) {
        if (node === null) return true;

        if (node.val <= lower || node.val >= upper) return false;

        return inorderTraversal(node.left, lower, node.val) && inorderTraversal(node.right, node.val, upper);
    }

    return inorderTraversal(root, -Infinity, Infinity);
}

