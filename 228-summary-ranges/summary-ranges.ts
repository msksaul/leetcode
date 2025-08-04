function summaryRanges(nums: number[]): string[] {
  let ans = []
  let idx = 0

  while(idx<nums.length) {
    let start = nums[idx]
    while(idx<nums.length-1 && nums[idx]+1 == nums[idx+1]) {
      idx++
    }
    if(start != nums[idx]) {
      ans.push(`${start}->${nums[idx]}`)
    }
    else {
      ans.push(`${start}`)
    }
    idx++
  }

  return ans
};