function lengthOfLongestSubstring(s: string): number {
  let L = 0
  let longest = 0
  let set = new Set()

  for(let R=0; R<s.length; R++) {
    while(set.has(s[R])) {
      set.delete(s[L])
      L++
    }

    const l = R-L+1
    longest = Math.max(l, longest)
    set.add(s[R])
  }

  return longest
};