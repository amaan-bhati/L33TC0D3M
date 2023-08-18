
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class ModeInfo {
    constructor() {
        this.value = null;
        this.frequency = 0;
        this.maxFrequency = 0;
    }
}

const findMode = function(root) {
    const modes = [];
    const info = new ModeInfo();
    
    const traverse = node => {
        if (!node) return;
        
        traverse(node.left);
        
        if (info.value === node.val) {
            info.frequency++;
        } else {
            info.value = node.val;
            info.frequency = 1;
        }
        
        if (info.frequency > info.maxFrequency) {
            info.maxFrequency = info.frequency;
        }
        
        traverse(node.right);
    };
    
    traverse(root);
    
    info.value = null;
    info.frequency = 0;
    
    const traverseAgain = node => {
        if (!node) return;
        
        traverseAgain(node.left);
        
        if (info.value === node.val) {
            info.frequency++;
        } else {
            info.value = node.val;
            info.frequency = 1;
        }
        
        if (info.frequency === info.maxFrequency) {
            modes.push(node.val);
        }
        
        traverseAgain(node.right);
    };
    
    traverseAgain(root);
    
    return modes;
};

// Example usage:

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(2);

const modes = findMode(root);
console.log(modes); // Output: [2]
