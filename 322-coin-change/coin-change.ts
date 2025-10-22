function coinChange(coins: number[], amount: number): number {
  coins = coins.sort((a,b) => a-b)
  const dp = new Array(coins.length+1).fill(0)

  for(let i=1; i<=amount; i++) {
    let min = Infinity

    for(const coin of coins) {
      let diff = i - coin

      if(diff < 0) break
      min = Math.min(min, dp[diff]+1)
    }

    dp[i] = min
  }

  return dp[amount] < Infinity ? dp[amount] : -1 
};