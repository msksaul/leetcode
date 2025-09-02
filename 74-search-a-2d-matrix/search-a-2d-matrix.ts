function searchMatrix(matrix: number[][], target: number): boolean {
  let m = matrix.length
  let n = matrix[0].length
  let L = 0
  let R = (m*n)-1

  while(L<=R) {
    const mid = L + Math.floor((R-L)/2)
    const i = Math.floor(mid/n)
    const j = mid%n
    const mid_num = matrix[i][j]

    if(target==mid_num) {
      return true
    }
    else if(target>mid_num) {
      L = mid+1
    }
    else {
      R = mid-1
    }
  }

  return false
};