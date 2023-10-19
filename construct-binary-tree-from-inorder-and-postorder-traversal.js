class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function buildTree(inorder, postorder) {
  if (inorder.length === 0 || postorder.length === 0) {
    return null;
  }

  const rootValue = postorder.pop();
  const root = new TreeNode(rootValue);

  const rootIndexInorder = inorder.indexOf(rootValue);

  root.right = buildTree(inorder.slice(rootIndexInorder + 1), postorder);
  root.left = buildTree(inorder.slice(0, rootIndexInorder), postorder);

  return root;
}

