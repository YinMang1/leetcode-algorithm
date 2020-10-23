/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let preSum = nums[0]
    let max_so_far = nums[0]
    for(let i=1;i<nums.length;i++) {
        if(preSum+num[i]<=num[i]) {
            max_so_far = num[i]
        }
    }
};
// @lc code=end

