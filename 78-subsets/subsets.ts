function subsets(nums: number[]): number[][] {
  let sol = []
  let res = []

  const backtrack = (i) => {
    if(i==nums.length) {
      res.push([...sol])
      return
    }

    backtrack(i+1)

    sol.push(nums[i])
    backtrack(i+1)
    sol.pop()
  }

  backtrack(0)

  return res
};