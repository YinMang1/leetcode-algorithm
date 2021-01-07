/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let sets = new Set()
    let flag = false
    if(!head) return false
    while(head.next) {
      if(sets.has(head.next)){
        flag = true
        break
      } else {
        sets.add(head.next)
      }
      head = head.next
    }
    return flag
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = hasCycle;
// @after-stub-for-debug-end