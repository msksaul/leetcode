function isAnagram(s: string, t: string): boolean {
  if(s.length !== t.length) return false
  
  let sk = new Array(26).fill(0)
  let tk = new Array(26).fill(0)
  
  for(let i=0; i<s.length; i++) {
    sk[s[i].charCodeAt(0)-97]++
    tk[t[i].charCodeAt(0)-97]++
  }
  
  return sk.join('')===tk.join('')
};