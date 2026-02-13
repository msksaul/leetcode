/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let L = 0
  let R = s.length-1

  while(L<R) {
    const temp = s[L]
    s[L] = s[R]
    s[R] = temp
    L++
    R--
  }
};