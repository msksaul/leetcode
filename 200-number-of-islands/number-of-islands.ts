function numIslands(grid: string[][]): number {
  let m = grid.length
  let n = grid[0].length
  let islands = 0

  const dfs = (i,j) => {
    if(i<0||i>=m||j<0||j>=n||grid[i][j]!='1') {
      return
    }
    else {
      grid[i][j]='0'
      dfs(i,j+1)
      dfs(i+1,j)
      dfs(i,j-1)
      dfs(i-1,j)
    }
  }

  for(let i=0; i<m; i++) {
    for(let j=0; j<n; j++) {
      if(grid[i][j]=='1') {
        islands++
        dfs(i,j)
      }
    }
  }

  return islands
};