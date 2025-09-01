function isPerfectSquare(num: number): boolean {
  let l = 1
  let r = num

  while(l<=r) {
    const m = l + Math.floor((r-l)/2)

    if(m*m==num) {
      return true
    }
    else if(m*m<num) {
      l=m+1
    }
    else {
      r=m-1
    }
  }

  return false
};