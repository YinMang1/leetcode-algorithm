/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const start = { '{': 1, '(': 1, '[': 1 }
    const map = { '}': '{', ']': '[', ')': '(' }
    let arr = [];
    let result = false;
    for (let i = 0; i < s.length; i++) {
        const curChar = s.substr(i, 1);
        if (start[curChar]) {
            arr.push(curChar)
        } else {
            if (arr.length === 0) {
                break;
            }
            const lastChar = arr.pop()
            if (map[curChar] !== lastChar) {
                break
            }
        }
        if (i == s.length - 1 && arr.length === 0) result = true;
    }
    return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end