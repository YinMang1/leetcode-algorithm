/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let a =x;
    let ifNegative = false
    if(x<0) {
        ifNegative = true;
        a = -x;
    }
    const arr = a.toString().split('').reverse();
    let num = arr.join('')
    ifNegative&&(num=-num)
    if(num<Math.pow(-2,31)||num>Math.pow(2,31)-1) return 0;
    return num
};
// @lc code=end

