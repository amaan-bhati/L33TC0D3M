
var allPossibleFBT = function (n) {
    if (n === 1) {
        return [new TreeNode(0)];
    }

    const trees = [];

    for (let leftNodes = 1; leftNodes < n; leftNodes += 2) {
        const rightNodes = n - 1 - leftNodes;
    }
        }
    }

    return trees;
};
