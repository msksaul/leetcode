function longestConsecutive(nums: number[]): number {
  const dic = new Set(nums)
  let longest = 0

  for(const num of [...dic]) {
    if(!dic.has(num-1)) {
      let next = num+1
      let len = 1
      while(dic.has(next)) {
        len++
        next++
      }
      longest = Math.max(len, longest)
    }
  }

  return longest
};