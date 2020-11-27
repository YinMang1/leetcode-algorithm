/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(!prices || prices.length === 0) return 0
  // let min = Number.MAX_SAFE_INTEGER
  // let max = 0
  // for(let i=0;i<prices.length;i++) {
  //   min = Math.min(min,prices[i])
  //   max = Math.max(max,prices[i]-min)
  // }
  // return max
    const n = prices.length
    const dp = new Array(n).fill(0)
    let min = prices[0]
    for(let i =1;i<n;i++) {
      min = Math.min(min,prices[i])
      dp[i] = Math.max(dp[i-1],prices[i]-min)
    }
    return dp[n-1]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end