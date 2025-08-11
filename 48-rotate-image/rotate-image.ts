/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  for(let i=0; i<matrix.length; i++) {
    for(let j=i+1; j<matrix.length; j++) {
      let t1 = matrix[i][j]
      let t2 = matrix[j][i]
      matrix[i][j] = t2
      matrix[j][i] = t1
    }
  }
  for(let i=0; i<matrix.length; i++) {
    for(let j=0; j<matrix.length/2; j++) {
      let t1 = matrix[i][j]
      let t2 = matrix[i][matrix.length-j-1]
      matrix[i][j] = t2
      matrix[i][matrix.length-j-1] = t1
    }
  }
};