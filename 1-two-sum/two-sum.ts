function twoSum(nums: number[], target: number): number[] {
  const seen = new Map()

  for(let i=0; i<nums.length; i++) {
    if(seen.has(target-nums[i])) {
      return [seen.get(target-nums[i]), i]
    }
    else {
      seen.set(nums[i], i)
    }
  }
};