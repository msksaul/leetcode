function combinationSum(candidates: number[], target: number): number[][] {
  let ans = []
  let sol = []

  const backtrack = (i, curr) => {
    if(curr == target) {
      ans.push([...sol])
      return
    }
    if(curr > target || i == candidates.length) {
      return
    }

    backtrack(i+1, curr)

    sol.push(candidates[i])
    backtrack(i, curr+candidates[i])
    sol.pop()
  }

  backtrack(0, 0)
  return ans
};