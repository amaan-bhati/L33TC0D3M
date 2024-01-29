var levelOrder = function (root) {
    if (!root?.val && root?.val !== 0) return [];
    const output = [];
    output[0] = [];

    const loop = (tree, level) => {
        if (tree?.val || tree?.val === 0) {
            if (!output[level]) {
                output[level] = [];
            }
            output[level].push(tree.val);
        }

        if (tree?.left) {
            loop(tree?.left, level + 1);
        }
        if (tree?.right) {
            loop(tree?.right, level + 1);
        }
    }
    loop(root, 0);

    return output;
};
