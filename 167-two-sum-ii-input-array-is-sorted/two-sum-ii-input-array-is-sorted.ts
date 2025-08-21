function twoSum(numbers: number[], target: number): number[] {
  let L = 0
  let R = numbers.length-1

  while(L<R) {
    if(numbers[L]+numbers[R]==target) {
      return [L+1, R+1]
    }
    else if(numbers[L]+numbers[R]<target) {
      L++
    }
    else {
      R--
    }
  }  
};