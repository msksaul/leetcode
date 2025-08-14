function twoSum(nums: number[], target: number): number[] {
  let seen = {}

  for(let i=0; i<nums.length; i++) {
    if(seen[target-nums[i]]) {
      return [seen[target-nums[i]][1], i]
    }
    seen[nums[i]]=[true,i]
  }
};