/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(!numRows) return []
  const result = [[1]]
  let pre = [1]
  for(let i=1;i<numRows;i++) {
    let newPre = []
    for(let len=0;len<pre.length;len++) {
      if(len ===0) {
        newPre.push(1)
      }
      if(pre[len+1]){
        newPre.push(pre[len]+pre[len+1])
      } else {
        newPre.push(pre[len])
      }
    }
    pre = newPre
    result.push(newPre)
  }
  return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = generate;
// @after-stub-for-debug-end