function evalRPN(tokens: string[]): number {
  let stack = []

  for(const token of tokens) {
    if(token==='+') {
      let b = stack.pop()
      let a = stack.pop()
      stack.push(a+b)
    }
    else if(token==='-') {
      let b = stack.pop()
      let a = stack.pop()
      stack.push(a-b)
    }
    else if(token==='*') {
      let b = stack.pop()
      let a = stack.pop()
      stack.push(a*b)
    }
    else if(token==='/') {
      let b = stack.pop()
      let a = stack.pop()
      stack.push(Math.trunc(a/b))
    }
    else {
      stack.push(+token)
    }
  }

  return stack[0]
};