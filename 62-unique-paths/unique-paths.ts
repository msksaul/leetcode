function uniquePaths(m: number, n: number): number {
  let dp = []

  for(let i=0; i<m; i++) {
    dp.push(new Array(n).fill(0))
  }

  dp[0][0] = 1

  for(let i=0; i<m; i++) {
    for(let j=0; j<n; j++) {
      if(i==0 && j==0) continue
      let val = 0
      if(i>0) val+= dp[i-1][j]
      if(j>0) val+= dp[i][j-1]
      dp[i][j] = val
    }
  }

  return dp[m-1][n-1]
};