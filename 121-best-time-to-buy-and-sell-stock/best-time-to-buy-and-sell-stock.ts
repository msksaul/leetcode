function maxProfit(prices: number[]): number {
  let min_price = prices[0]
  let max_profit = 0

  for(const price of prices) {
    if(price<min_price) {
      min_price=price
      continue
    }
    if(price-min_price>max_profit) {
      max_profit = price-min_price
    }
  }

  return max_profit
};