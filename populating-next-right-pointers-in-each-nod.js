var connect = function (root) {
    if (!root) return root;

    let queue = [root];
    while (queue.length) {
        let temp = null;
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            node.next = null;
            if (temp) temp.next = node;
            temp = node;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return root;
};
