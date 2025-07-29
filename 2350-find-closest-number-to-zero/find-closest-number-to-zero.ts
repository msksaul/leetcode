function findClosestNumber(nums: number[]): number {
  let closest = nums[0]

  for(let n of nums) {
      if(Math.abs(n)<Math.abs(closest)) {
        closest = n
      }
  }

  if(closest<0 && nums.includes(Math.abs(closest))) {
    return Math.abs(closest)
  }

  return closest
};