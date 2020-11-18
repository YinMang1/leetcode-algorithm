/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  let flag = false
  if(!root) return false
   function recursion(node,sumNum) {
    if(!node) return
    const curSum = sumNum+node.val
    if(curSum === sum&&!node.left&&!node.right){
      flag=true
    }
    recursion(node.left,curSum)
    recursion(node.right,curSum)

   }
   recursion(root,0)
   return flag
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = hasPathSum;
// @after-stub-for-debug-end