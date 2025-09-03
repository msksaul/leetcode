function search(nums: number[], target: number): number {
  let L = 0
  let R = nums.length-1

  while(L<R) {
    const mid = L + Math.floor((R-L)/2)

    if(nums[mid]>nums[R]) {
      L = mid+1
    }
    else {
      R = mid
    }
  }

  let midx = L

  if(midx==0) {
    L = 0
    R = nums.length-1
  }
  else if(target>=nums[0] && target<=nums[midx-1]) {
    L = 0
    R = midx-1
  }
  else {
    L = midx
    R = nums.length-1
  }

  while(L<=R) {
    const mid = L + Math.floor((R-L)/2)

    if(nums[mid]==target) {
      return mid
    }
    else if(nums[mid]<target) {
      L = mid+1
    }
    else {
      R = mid-1
    }

  }

  return -1
};