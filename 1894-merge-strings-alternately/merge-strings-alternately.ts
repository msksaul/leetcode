function mergeAlternately(word1: string, word2: string): string {
  const A = word1.length, B = word2.length
  let a = 0, b = 0
  let s = []

  while(a<A && b<B) {
    s.push(word1[a++])
    s.push(word2[b++])
  }

  while(a<A) {
    s.push(word1[a])
    a++
  }
  while(b<B) {
    s.push(word2[b])
    b++
  }

  return s.join('')
};