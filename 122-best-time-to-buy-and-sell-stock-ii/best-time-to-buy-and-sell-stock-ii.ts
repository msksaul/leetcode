function maxProfit(prices: number[]): number {
  let i = 0
  let hi = prices[0]
  let lo = prices[0]
  let n = prices.length-1
  let profit = 0

  while(i<n) {
    while(i<n && prices[i] >= prices[i+1]) {
      i++
    }
    lo = prices[i]

    while(i<n && prices[i] <= prices[i+1]) {
      i++
    }
    hi = prices[i]

    profit += hi-lo
  }

  return profit
};