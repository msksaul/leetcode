function checkInclusion(s1: string, s2: string): boolean {
  const n1 = s1.length
  const n2 = s2.length

  if(n1>n2) return false

  let c1 = new Array(26).fill(0)
  let c2 = new Array(26).fill(0)

  for(let i=0; i<n1; i++) {
    c1[s1[i].charCodeAt(0)-97]++
    c2[s2[i].charCodeAt(0)-97]++
  }

  if(c1.toString()==c2.toString()) return true

  for(let i=n1; i<n2; i++) {
    c2[s2[i].charCodeAt(0)-97]++
    c2[s2[i-n1].charCodeAt(0)-97]--
    
    if(c1.toString()==c2.toString()) return true
  }

  return false
};