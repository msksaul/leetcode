function longestConsecutive(nums) {
  let max_seq = 0
  const hash = new Set(nums)

  for(const n of hash) {
    if(!hash.has(+n-1)) {
      let len = 1
      let next = +n+1
      
      while(hash.has(next)) {
        len++
        next++
      }

      max_seq = Math.max(max_seq, len)
    }
  }

  return max_seq
}
