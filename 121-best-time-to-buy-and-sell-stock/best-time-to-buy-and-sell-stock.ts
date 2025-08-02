function maxProfit(prices: number[]): number {
  let min_price = Infinity
  let max_profit = 0

  for(const price of prices) {
    if(price<min_price) {
      min_price=price
    }
    let profit = price-min_price
    if(profit>max_profit) {
      max_profit = profit
    }
  }

  return max_profit
};