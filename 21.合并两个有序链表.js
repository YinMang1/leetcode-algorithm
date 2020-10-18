/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    const result = new ListNode();
    let preNode = result;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            preNode.next = l1
            l1 = l1.next
        } else {
            preNode.next = l2
            l2 = l2.next
        }
        preNode = preNode.next
    }
    preNode.next = l1 ? l1 : l2
    return result.next
};
// @lc code=end

