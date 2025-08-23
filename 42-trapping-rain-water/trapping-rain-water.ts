function trap(height: number[]): number {
  let lw = 0
  let rw = 0
  let larr = []
  let rarr = []
  let sum = 0

  for(let i=0; i<height.length; i++) {
    let j = height.length-i-1
    larr[i] = lw
    rarr[j] = rw
    lw = Math.max(lw, height[i])
    rw = Math.max(rw, height[j])
  }

  for(let i=0; i<larr.length; i++) {
    let pw = Math.min(larr[i], rarr[i])
    sum += Math.max(0, pw - height[i])
  }

  return sum
};