function containsDuplicate(nums: number[]): boolean {
  const hash = new Map()

  for(const num of nums) {
      if(hash.has(num)) {
          return true
      }
      hash.set(num, true)
  }

  return false
}