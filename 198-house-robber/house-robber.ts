function rob(nums: number[]): number {
  const n = nums.length

  if(n==1) return nums[0]
  if(n==2) return Math.max(nums[0], nums[1])

  let prev = nums[0]
  let curr = Math.max(nums[0], nums[1])

  for(let i=2; i<nums.length; i++) {
    let next = Math.max(curr, nums[i]+prev)
    prev = curr
    curr = next
  }

  return curr
};