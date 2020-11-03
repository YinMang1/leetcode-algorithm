/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
// var isSymmetric = function (root) {
//     if (!root) return true
//     function isEque(left, right) {
//         if (!left && !right) return true
//         if (!left || !right) return false
//         return left.val === right.val && isEque(left.left, right.right) && isEque(left.right, right.left)
//     }
//     return isEque(root.left,root.right)
// };
var isSymmetric = function (root) {
    if (!root) return true
    const stack = [root.left, root.right]
    while (stack.length > 0) {
        const right = stack.pop()
        const left = stack.pop()
        if (right && left) {
            if (left.val !== right.val) return false
            stack.push(left.left)
            stack.push(right.right)
            stack.push(left.right)
            stack.push(right.left)
        } else if(right||left) {
            return false
        }
    }
    return true
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isSymmetric;
// @after-stub-for-debug-end