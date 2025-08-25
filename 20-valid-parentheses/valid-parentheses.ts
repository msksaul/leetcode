function isValid(s: string): boolean {
  const pairs = {')':'(', '}':'{', ']':'['}
  let stack = []

  for(const b of s) {
    if(!pairs[b]) {
      stack.push(b)
    }
    else {
      if(stack.length==0) {
        return false
      }
      else {
        let p = stack.pop()
        if(pairs[b]!=p) return false
      }
    }
  }

  return stack.length==0
};