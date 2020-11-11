/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  const result = []
   function recursion(node,level) {
    if(!node) {
      return 
    }
    result[level]?result[level].push(node.val):result[level]=[node.val]
    level++
    recursion(node.left,level)
    recursion(node.right,level)
   }
   recursion(root,0)
   return result.reverse()
};
// @lc code=end

