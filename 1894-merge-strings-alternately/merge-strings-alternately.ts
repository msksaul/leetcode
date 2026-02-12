function mergeAlternately(word1: string, word2: string): string {
  const A = word1.length
  const B = word2.length
  let a = 0
  let b = 0
  let merged = []

  while(a<A && b<B) {
    merged.push(word1[a++])
    merged.push(word2[b++])
  }

  while(a<A) {
    merged.push(word1[a++])
  }

  while(b<B) {
    merged.push(word2[b++])
  }

  return merged.join('')
};