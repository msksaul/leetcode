function climbStairs(n: number): number {
  if(n==1) return 1
  if(n==2) return 2

  let prev = 1
  let curr = 2

  for(let i=2; i<n; i++) {
    let next = prev+curr
    prev = curr
    curr = next
  }

  return curr
};