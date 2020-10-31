/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head === null) return null
    const fisrt =head
    let val = head.val
    let cur = head
    while(cur.next !== null) {
        if(cur.next.val === val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
            val = cur.val
        }
    }
    return fisrt
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = deleteDuplicates;
// @after-stub-for-debug-end