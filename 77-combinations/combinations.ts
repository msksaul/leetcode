function combine(n: number, k: number): number[][] {
  let ans = []
  let sol = []

  const backtrack = (x) => {
    if(sol.length==k) {
      ans.push([...sol])
      return
    }

    if(x > k-sol.length) {
      backtrack(x-1)
    }

    sol.push(x)
    backtrack(x-1)
    sol.pop()
  }

  backtrack(n)
  return ans
};