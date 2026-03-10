function checkInclusion(s1: string, s2: string): boolean {
  if(s1.length>s2.length) return false
  let fs1 = new Array(26).fill(0)
  
  for(const char of s1) {
    fs1[char.charCodeAt(0)-97]++
  }

  for(let i=0; i<=s2.length-s1.length; i++) {
    let fs2 = new Array(26).fill(0)
    for(let j=i; j<i+s1.length; j++) {
      fs2[s2[j].charCodeAt(0)-97]++
    }
    if(fs1.toString() == fs2.toString()) return true
  }

  return false
};