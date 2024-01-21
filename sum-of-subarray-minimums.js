var sumSubarrayMins = function (arr) {
    let res = 0;
    let n = arr.length;
    const k = 1000000007
    let stack = [];
    stack.push(0);
    let leftMin = [0]
    for (let i = 1; i < n; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i])
            stack.pop();
        if (stack.length == 0)
            leftMin[i] = i;
        else
            leftMin[i] = i - stack[stack.length - 1] - 1;
        stack.push(i)
    }
    stack = [];
    stack.push(n - 1);
    let rightMin = [];
    rightMin[n - 1] = 0;
    for (let i = n - 2; i >= 0; i--) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i])
            stack.pop();
        if (stack.length == 0)
            rightMin[i] = n - i - 1;
        else
            rightMin[i] = stack[stack.length - 1] - 1 - i;
        stack.push(i)
    }
    for (let i = 0; i < n; i++) {
        let sum = (leftMin[i] + rightMin[i] + ((leftMin[i] * rightMin[i])) + 1) * arr[i];
        res = (res + sum) % k
    }
    return res;
};
