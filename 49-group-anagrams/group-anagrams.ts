function groupAnagrams(strs: string[]): string[][] {
  if(!strs.length) return [['']]
  let group = {}
  let tStrs = strs.map(w => {
    let key = new Array(26).fill(0)
    for(const l of w) {
      key[l.charCodeAt(0)-97]++
    }
    return [key.join('-'), w]
  })
  
  for(const [key, value] of tStrs) {
    if(!group[key]) {
      group[key] = [value]
    }
    else {
      group[key].push(value)
    }
  }
  return Object.values(group)
};