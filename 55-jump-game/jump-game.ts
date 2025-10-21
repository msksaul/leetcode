function canJump(nums: number[]): boolean {
  let target = nums.length-1

  for(let i=nums.length-2; i>=0; i--) {
    let max_jump = nums[i]

    if(i+max_jump >= target) target = i
  }

  return target == 0
};