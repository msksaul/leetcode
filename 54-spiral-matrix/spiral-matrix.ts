function spiralOrder(matrix: number[][]): number[] {
  let ans = []
  let i=0, j=0
  let direction = 'right'
  let up_wall = 0
  let right_wall = matrix[0].length
  let down_wall = matrix.length
  let left_wall = -1

  while(ans.length < matrix.length*matrix[0].length) {
    if(direction == 'right') {
      while (j<right_wall) {
        ans.push(matrix[i][j])
        j++
      }
      i++
      j--
      right_wall--
      direction = 'down'
    }
    else if(direction == 'down') {
      while(i<down_wall) {
        ans.push(matrix[i][j])
        i++
      }
      i--
      j--
      down_wall--
      direction = 'left'
    }
    else if(direction == 'left') {
      while(j>left_wall) {
        ans.push(matrix[i][j])
        j--
      }
      j++
      i--
      left_wall++
      direction = 'up'
    }
    else {
      while(i>up_wall) {
        ans.push(matrix[i][j])
        i--
      }
      j++
      i++
      up_wall++
      direction = 'right'
    }
  }
  return ans
};