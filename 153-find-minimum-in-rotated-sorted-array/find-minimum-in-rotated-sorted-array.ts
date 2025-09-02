function findMin(nums: number[]): number {
  let L = 0
  let R = nums.length-1

  while(L<R) {
    const m = L + Math.floor((R-L)/2)

    if(nums[m]>nums[R]) {
      L = m+1
    }
    else {
      R = m
    }
  }

  return nums[L]
};