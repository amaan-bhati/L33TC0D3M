var countMatchingSubarrays = function (nums, pattern) {
    const m = nums.length;
    const n = pattern.length;
    let count = 0;
    for (let i = 0; i < m; i++) {
        let isMatch = 1;
        for (let k = 0; k < n; k++) {
            if (pattern[k] == 1) if (!(nums[i + k + 1] > nums[i + k])) { isMatch = 0; break; }
            if (pattern[k] == 0) if (!(nums[i + k + 1] == nums[i + k])) { isMatch = 0; break; }
            if (pattern[k] == -1) if (!(nums[i + k + 1] < nums[i + k])) { isMatch = 0; break; }
        }
        if (isMatch) count++;
    }
    return count;
};
