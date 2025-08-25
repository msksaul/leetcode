function calPoints(operations: string[]): number {
  let r = []

  for(const op of operations) {
    if(op == '+') {
      r.push(+r[r.length-1] + +r[r.length-2])
    }
    else if(op == 'D') {
      r.push(+r[r.length-1]*2)
    }
    else if(op == 'C') {
      r.pop()
    }
    else {
      r.push(+op)
    }
  }

  return r.reduce((sum, n) => sum+n, 0)
};