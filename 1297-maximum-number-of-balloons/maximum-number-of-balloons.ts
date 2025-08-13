function maxNumberOfBalloons(text: string): number {
  let dic = {}

  for(const l of text) {
    if(!dic[l]) {
      dic[l]=1
    }
    else {
      dic[l]++
    }
  }

  return Math.min(
    dic['b'] ? dic['b'] : 0,
    dic['a'] ? dic['a'] : 0,
    dic['l'] ? Math.floor(dic['l']/2) : 0,
    dic['o'] ? Math.floor(dic['o']/2) : 0,
    dic['n'] ? dic['n'] : 0
  )
};