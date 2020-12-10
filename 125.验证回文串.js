/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if(!s) return true
  let str = s.toLowerCase()
  let index1 = 0;
  let index2 = s.length-1;
  const patt = /[^a-z0-9]/
  while(index1<=index2) {
    if(patt.test(str[index1])) {
      index1++
      continue
    }
    if(patt.test(str[index2])) {
      index2--
      continue
    }
    if(str[index1] !== str[index2]) {
      return false
    }
    index1++
    index2--
  }
  return true
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end