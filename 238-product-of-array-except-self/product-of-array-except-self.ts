function productExceptSelf(nums: number[]): number[] {
  let l_mult = 1
  let r_mult = 1
  let l_arr = new Array(nums.length).fill(0)
  let r_arr = new Array(nums.length).fill(0)
  let ans = []

  for(let i=0; i<nums.length; i++) {
    let j = nums.length-i-1
    l_arr[i] = l_mult
    r_arr[j] = r_mult
    l_mult*=nums[i]
    r_mult*=nums[j]
  }

  for(let i=0; i<l_arr.length; i++) {
    ans.push(l_arr[i]*r_arr[i])
  } 

  return ans
};