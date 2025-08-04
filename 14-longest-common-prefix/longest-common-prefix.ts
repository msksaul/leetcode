function longestCommonPrefix(strs: string[]): string {
  const minL = Math.min(...strs.map(s => s.length))
  let idx = 0

  while(idx<minL) {
    for(const word of strs) {
      if(word[idx] != strs[0][idx]) return word.slice(0,idx)
    }
    idx++
  }

  return strs[0].slice(0,idx)
};