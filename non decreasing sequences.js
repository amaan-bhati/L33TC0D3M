var findSubsequences = function (nums) {
    const ans = [];

    const seen = new Set();
    const backtrack = (curr, startIdx) => {
        if (curr.length >= 2) {
            const str = curr.join(':');
            if (!seen.has(str)) {
                seen.add(str);
                ans.push([...curr]);
            } else {
                return;
            }
        }
        for (let i = startIdx; i < nums.length; i++) {
            if (!curr.length || nums[i] >= curr[curr.length - 1]) { 
                curr.push(nums[i]);
                backtrack(curr, i + 1);
                curr.pop();
            }
        }
    };

    backtrack([], 0);
    return ans;
}; 
