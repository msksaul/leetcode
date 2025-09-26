function permute(nums: number[]): number[][] {
  let ans = []
  let perm = []

  const backtrack = () => {
    if(perm.length==nums.length) {
      ans.push([...perm])
      return
    }

    for(const x of nums) {
      if(!perm.includes(x)) {
        perm.push(x)
        backtrack()
        perm.pop()
      }
    }
  }

  backtrack()
  return ans
};