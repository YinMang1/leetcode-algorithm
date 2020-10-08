/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!Array.isArray(strs)) {
        return ''
    }
    if(typeof strs[0] !== 'string') {
        return ''
    }
    let result = '';
    for(let i = 0;i<strs[0].length;) {
        const str = strs[0].substr(0,i+1) 
        if(strs.every((item)=>{
            return item.startsWith(str)
        })) {
            result = str;
            i++
        } else {
            break;
        }
    }
    return result
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestCommonPrefix;
// @after-stub-for-debug-end