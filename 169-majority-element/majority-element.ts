function majorityElement(nums: number[]): number {
  let ans
  let count = 0

  for(const num of nums) {
    if(count == 0) {
      ans = num
    }
    if(ans == num) {
      count++
    }
    else {
      count--
    }
  }

  return ans
};