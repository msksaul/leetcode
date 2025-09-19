function lastStoneWeight(stones: number[]): number {
  while(stones.length > 1) {
    stones = stones.sort((a,b) => b-a)

    let y = stones.shift()
    let x = stones.shift()

    if(y-x > 0) {
      stones.push(y-x)
    }
  }

  return stones.length == 0 ? 0 : stones[0]
};