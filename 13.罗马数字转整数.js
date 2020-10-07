/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let num = 0;
    let map = new Map([
        ['I', 1],
        ['IV', 4],
        ['IX', 9],
        ['V', 5],
        ['X', 10],
        ['XL', 40],
        ['XC', 90],
        ['L', 50],
        ['C', 100],
        ['CD', 400],
        ['CM', 900],
        ['D', 500],
        ['M', 1000],
    ])
    for (let i = 0; i < s.length;) {
        if(i+1<s.length&&map.has(s.substr(i,2))){
            num += map.get(s.substr(i,2))
            i+=2;
        } else {
            num += map.get(s.substr(i,1))
            i++
        }
    }
    return num
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = romanToInt;
// @after-stub-for-debug-end