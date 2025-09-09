function longestOnes(nums: number[], k: number): number {
  let max_w = 0
  let zeros = 0
  let L = 0

  for(let R=0; R<nums.length; R++) {
    if(nums[R]==0) {
      zeros++
    }

    while(zeros>k) {
      if(nums[L]==0) {
        zeros--
      }
      L++
    }

    const w = R-L+1
    max_w = Math.max(w, max_w)
  }

  return max_w
};