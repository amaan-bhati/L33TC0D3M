var levelOrderBottom = function (root) {
    const arr = []
    const helper = (node, l) => {
        if (!node) return

        if (arr.length && arr[l]) arr[l] = [...arr[l], node.val]
        else arr[l] = [node.val]

        const newL = l + 1
        helper(node.left, newL)
        helper(node.right, newL)
        return
    }
    helper(root, 0)
    return arr.reverse()
};
