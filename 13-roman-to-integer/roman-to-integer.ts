function romanToInt(s: string): number {
    const v = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    }
    let sum = 0
    let i = 0
    while(i<s.length) {
      if(i<s.length-1 && v[s[i]]<v[s[i+1]]) {
        sum+=v[s[i+1]]-v[s[i]]
        i+=2
      }
      else {
        sum+=v[s[i]]
        i+=1
      }
    }
    return sum
};