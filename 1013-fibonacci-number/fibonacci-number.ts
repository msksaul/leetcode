function fib(n: number): number {
  const memo = {}

  const f = (x) => {
    if(x==0) return 0
    if(x==1) return 1
    if(memo[x]) return memo[x]
    memo[x] = f(x-2)+f(x-1)
    return memo[x]
  }

  return f(n)
};