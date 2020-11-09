/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
  // if(!root) {
  //   return 0
  // } else {
  //   const left = maxDepth(root.left)
  //   const right = maxDepth(root.right)
  //   return Math.max(left,right) +1
  // }
  if(!root) return 0
  const stack = [root]
  let level = 1
  while(stack.length >0) {
    const  length = stack.length
    for(let i =0;i<length;i++) {
    const cur = stack.shift()
    cur.left && stack.push(cur.left)
    cur.right && stack.push(cur.right)
    }
    stack.length>0 && level++
  }
  return level
};
// @lc code=end

