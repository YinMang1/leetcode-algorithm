/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let set = new Set()
    nums.forEach(item => {
        if (set.has(item)) {
            set.delete(item)
        }
        else {
            set.add(item)
        }
    })
    return [...set][0]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = singleNumber;
// @after-stub-for-debug-end