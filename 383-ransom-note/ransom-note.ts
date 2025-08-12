function canConstruct(ransomNote: string, magazine: string): boolean {
  let dic = {}

  for(const l of magazine) {
    if(!dic[l]) {
      dic[l]=1
    }
    else {
      dic[l]++
    }
  }

  for(const l of ransomNote) {
    if(!dic[l]) {
      return false
    }
    else if(dic[l]==0) {
      return false
    }
    else {
      dic[l]--
    }
  }

  return true
};