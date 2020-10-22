/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let index = 0
  let left = 0
  let right = nums.length-1
  while(left <= right) {
    index = left + parseInt((right-left)/2)
    if(nums[index] === target) {
      return index
    }
    if(nums[index] < target){
      left = index+1 
    } else {
      right = index -1
    }
  }
  return left
};
// @lc code=end

