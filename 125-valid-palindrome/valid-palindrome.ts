function isPalindrome(s: string): boolean {
  s = s.replace(/[^a-zA-Z0-9]/g, '')
  s = s.toLowerCase()
  let L = 0
  let R = s.length-1

  while(L<R) {
    if(s[L]!=s[R]) {
      return false
    }
    L++
    R--
  }

  return true
};