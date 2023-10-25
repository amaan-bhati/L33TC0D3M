class Node {
    constructor(val, left = null, right = null, next = null) {
        this.val = val;
        this.left = left;
        this.right = right;
        this.next = next;
    }
}

function connect(root) {
    if (!root) return root;
    
    if (root.left && root.right) {
        root.left.next = root.right;
        root.right.next = getNextRight(root);
    }
    
    connect(root.right); // Connect right subtree first
    connect(root.left);  // Then connect left subtree
    
    return root;
}

function getNextRight(node) {
    let temp = node.next;
    while (temp) {
        if (temp.left) return temp.left;
        if (temp.right) return temp.right;
        temp = temp.next;
    }
    return null;
}

// Helper function to print the tree
function printTree(root) {
    let result = [];
    let current = root;
    while (current !== null) {
        let temp = current;
        while (temp !== null) {
            result.push(temp.val);
            temp = temp.next;
        }
        result.push('#'); // Signifying the end of each level
        current = current.left;
    }
    return result;
}
