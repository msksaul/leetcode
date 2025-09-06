function findMaxAverage(nums: number[], k: number): number {
  let curr_sum = 0

  for(let i=0; i<k; i++) {
    curr_sum+=nums[i]
  }

  let max_av = curr_sum/k

  for(let i=k; i<nums.length; i++) {
    curr_sum+=nums[i]
    curr_sum-=nums[i-k]

    const av = curr_sum/k

    max_av = Math.max(max_av, av)
  }

  return max_av
};