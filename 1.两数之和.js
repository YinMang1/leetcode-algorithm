/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let prevSet = {};
    for(let index=0;index<nums.length;index++) {
        const cur = nums[index]
        const another = target - cur;
        if(prevSet[another] !==undefined) {
            return [prevSet[another],index]
        } else {
            prevSet[cur] = index
        }
    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end