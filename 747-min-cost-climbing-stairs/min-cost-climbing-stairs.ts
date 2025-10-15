function minCostClimbingStairs(cost: number[]): number {
  const memo = new Map([[0,0], [1,0]])

  const min_cost = (i) => {
    if(memo.has(i)) return memo.get(i)

    const val = Math.min(min_cost(i-1)+cost[i-1], min_cost(i-2)+cost[i-2])
    memo.set(i, val)

    return val
  }

  return min_cost(cost.length)
};