/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const str = s.trim()
  const index = str.lastIndexOf(' ')
  if(index>-1) {
    return str.length - index -1
  } else {
      return str.length
  }
};
// @lc code=end

