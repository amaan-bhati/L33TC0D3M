/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const numIndexMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (numIndexMap.has(nums[i]) && Math.abs(i - numIndexMap.get(nums[i])) <= k) {
            return true;
        }
        numIndexMap.set(nums[i], i);
    }

    return false;
};
