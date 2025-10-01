function exist(board: string[][], word: string): boolean {
  let m = board.length
  let n = board[0].length
  let w = word.length

  if(m==1 && n==1) return board[0][0] == word

  const backtrack = (i, j, index) => {
    if(index == w) return true
    if(board[i][j] !== word[index]) return false

    let char = board[i][j]
    board[i][j] = '#'
    for(const [i_off, j_off] of [[0,1],[1,0],[0,-1],[-1,0]]) {
      let row = i+i_off
      let col = j+j_off

      if(0<=row && row<m && 0<=col && col<n) {
        if(backtrack(row, col , index+1)) return true
      }
    }
    board[i][j] = char
    return false
  }

  for(let i=0; i<m; i++) {
    for(let j=0; j<n; j++) {
      if(backtrack(i, j, 0)) return true
    }
  }

  return false
};