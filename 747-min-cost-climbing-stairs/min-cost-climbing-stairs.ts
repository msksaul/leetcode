function minCostClimbingStairs(cost: number[]): number {
  let curr = 0
  let prev = 0

  for(let i=2; i<=cost.length; i++) {
    let next = Math.min(cost[i-1]+curr, cost[i-2]+prev)
    prev = curr
    curr = next
  }

  return curr
};