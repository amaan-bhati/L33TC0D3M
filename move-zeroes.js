/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let nonZeroIndex = 0;

    // Iterate through the array, and move non-zero elements to the beginning
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }

    // Fill the rest of the array with zeros
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};  
