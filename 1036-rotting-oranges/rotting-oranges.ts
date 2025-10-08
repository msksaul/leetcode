function orangesRotting(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length
  const FRESH = 1
  const ROTTEN = 2
  let fresh_o = 0
  let stack = []
  let minutes = -1

  for(let i=0; i<grid.length; i++) {
    for(let j=0; j<grid[0].length; j++) {
      if(grid[i][j]===ROTTEN) {
        stack.push([i,j])
      }
      else if(grid[i][j]===FRESH) {
        fresh_o++
      }
    }
  }

  if(fresh_o==0) return 0

  while(stack.length>0) {
    let size = stack.length
    minutes++
    for(let k=0; k<size; k++) {
      const [i, j] = stack.shift()
      for(const [r,c] of [[i,j+1],[i+1,j],[i,j-1],[i-1,j]]) {
        if(r>=0&&r<m &&c>=0&&c<n && grid[r][c]===FRESH) {
          grid[r][c] = ROTTEN
          fresh_o--
          stack.push([r,c])
        }
      }
    }
  }

  return fresh_o == 0 ? minutes : -1
};