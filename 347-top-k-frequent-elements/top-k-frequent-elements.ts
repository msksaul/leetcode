function topKFrequent(nums: number[], k: number): number[] {
  let dic = {}

  for(let i=0; i<nums.length; i++) {
    if(!dic[nums[i]]) {
      dic[nums[i]] = 1
    }
    else {
      dic[nums[i]]++
    }
  }

  let bucket = new Array(nums.length+1).fill(0)

  for(const num in dic) {
    if(bucket[dic[num]]===0) {
      bucket[dic[num]] = [+num]
    }
    else {
      bucket[dic[num]].push(+num) 
    }
  }

  let ans = []

  for(let i=bucket.length-1; i>=0; i--) {
    if(bucket[i]!==0) {
      ans = [...ans, ...bucket[i]]
    }
    if(ans.length == k) break
  }

  return ans
};