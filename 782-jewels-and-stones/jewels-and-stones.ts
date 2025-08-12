function numJewelsInStones(jewels: string, stones: string): number {
  const s = new Set(jewels)
  let count = 0

  for(const stone of stones) {
    if(s.has(stone)) {
      count++
    }
  }

  return count
};