function generateParenthesis(n: number): string[] {
  let ans = []
  let sol = []

  const backtrack = (open, close) => {
    if(sol.length == 2*n) {
      ans.push(sol.join(''))
    }

    if(open < n) {
      sol.push('(')
      backtrack(open+1, close)
      sol.pop()
    }

    if(open>close) {
      sol.push(')')
      backtrack(open, close+1)
      sol.pop()
    }
  }
  backtrack(0,0)
  return ans
};