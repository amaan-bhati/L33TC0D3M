
var addTwoNumbers = function (l1, l2) {
    const stack1 = getStack(l1);
    const stack2 = getStack(l2);
    let head = nul
    let carry = 0;
    while (stack1.length || stack2.length || carry) {
        const sum = (stack1.pop() || 0) + (stack2.pop() || 0) + carry;
        carry = Math.floor(sum / 10);
        head = new ListNode(sum % 10, head);
    }
    return head;
};

var getStack = function (node) {
    const stack = [];
    while (node) {
        stack.push(node.val);
        node = node.next;
    }
    return stack;
}

