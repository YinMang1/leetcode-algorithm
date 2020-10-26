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
    let pre = nums[0]
    let result = nums[0]
    for(let i=1;i<nums.length;i++) {
        if(pre+nums[i]<=nums[i]) {
            pre = nums[i]
        } else {
            pre = pre + nums[i]
        }
        result = Math.max(result,pre)
    }
    return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxSubArray;
// @after-stub-for-debug-end