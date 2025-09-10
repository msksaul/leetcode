function characterReplacement(s: string, k: number): number {
  let longest = 0
  let L = 0
  let counts = new Array(26).fill(0)

  for(let R=0; R<s.length; R++) {
    counts[s[R].charCodeAt(0)-65]++

    while(R-L+1-Math.max(...counts) > k) {
      counts[s[L].charCodeAt(0)-65]--
      L++
    }

    longest = Math.max(longest, R-L+1)
  }

  return longest
};