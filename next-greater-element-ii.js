var nextGreaterElements = function (nums) {
    let l = nums.length;
    let stack = [];
    for (var i = l - 2; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
            stack.pop();
        }
        stack.push(nums[i]);
    }
    let answer = new Array(l);
…        stack.push(nums[i]);
    }
    return answer;
};
