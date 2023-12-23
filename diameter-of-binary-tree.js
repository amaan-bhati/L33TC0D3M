var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    const dfs = (node) => {
        if (!node) {
            return 0;
        }

        const leftDepth = dfs(node.left);
        const rightDepth = dfs(node.right);

        diameter = Math.max(diameter, leftDepth + rightDepth);

        return 1 + Math.max(leftDepth, rightDepth);
    };

    dfs(root);

    return diameter;
};
