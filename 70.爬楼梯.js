/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <=2) return n
    let dp = []
    dp[1] = 1
    dp[2]= 2
    for(let i = 3;i<=n;i++) {
        dp[i] = dp[i-2]+dp[i-1]
    }
    return dp[n]
};
// @lc code=end

