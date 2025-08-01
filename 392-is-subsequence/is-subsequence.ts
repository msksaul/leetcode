function isSubsequence(s: string, t: string): boolean {
  if(s=='') return true
  if(s.length>t.length) return false

  let j = 0
  for(let i=0; i<t.length; i++) {
    if(s[j]==t[i]) {
      if(j==s.length-1) return true
      j++
    }
  }
  return false
};