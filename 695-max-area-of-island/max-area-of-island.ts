function maxAreaOfIsland(grid: number[][]): number {
  let m = grid.length
  let n = grid[0].length
  let area = 0

  const dfs = (i,j) => {
    if(i<0||i>=m||j<0||j>=n||grid[i][j]!=1) {
      return 0
    }
    else {
      grid[i][j]=0
      return 1 + dfs(i,j+1) + dfs(i+1,j) + dfs(i,j-1) + dfs(i-1,j)
    }
  }

  for(let i=0; i<m; i++) {
    for(let j=0; j<n; j++) {
      if(grid[i][j]==1) {
        area = Math.max(area, dfs(i,j))
      }
    }
  }

  return area
};