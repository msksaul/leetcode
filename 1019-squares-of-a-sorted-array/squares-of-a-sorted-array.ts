function sortedSquares(nums: number[]): number[] {
  let left = 0
  let right = nums.length-1
  let res = []

  while(left<=right) {
    if(Math.abs(nums[left])>Math.abs(nums[right])) {
      res.unshift(nums[left]**2)
      left++
    }
    else {
      res.unshift(nums[right]**2)
      right--
    }
  }

  return res
};