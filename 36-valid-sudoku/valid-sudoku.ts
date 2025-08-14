function isValidSudoku(board: string[][]): boolean {
  for(let i=0; i<9; i++) {
    let seen = new Set()
    for(let j=0; j<9; j++) {
      if(seen.has(board[i][j])){
        return false
      }
      else if(board[i][j]!='.') {
        seen.add(board[i][j])
      }
    }
  }

  for(let i=0; i<9; i++) {
    let seen = new Set()
    for(let j=0; j<9; j++) {
      if(seen.has(board[j][i])){
        return false
      }
      else if(board[j][i]!='.') {
        seen.add(board[j][i])
      }
    }
  }

  const idxs = [[0,0],[0,3],[0,6],[3,0],[3,3],[3,6],[6,0],[6,3],[6,6]]

  for(const [i,j] of idxs) {
    let seen = new Set()
    for(let row=i; row<i+3; row++) {
      for(let col=j; col<j+3; col++) {
        if(seen.has(board[row][col])) {
          return false
        }
        else if(board[row][col]!='.') {
          seen.add(board[row][col])
        }
      }
    }
  }

  return true
};