function letterCombinations(digits: string): string[] {
  if(digits=='') return []

  let ans = []
  let sol = []

  const letterMap = {
    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
    '6': 'mno','7': 'pqrs', '8': 'tuv', '9': 'wxyz'
  }

  const backtrack = (i) => {
    if(i==digits.length) {
      sol.push(ans.join(''))
      return
    }

    for(const letter of letterMap[digits[i]]) {
      ans.push(letter)
      backtrack(i+1)
      ans.pop()
    }
  }

  backtrack(0)
  return sol
};