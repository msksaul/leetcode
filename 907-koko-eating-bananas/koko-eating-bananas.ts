function minEatingSpeed(piles: number[], h: number): number {
  const k_works = (k) => {
    let hours = 0
    for(const p of piles) {
      hours+=Math.ceil(p/k)
    }
    return hours<=h
  }

  let L = 1
  let R = Math.max(...piles)

  while(L<R) {
    const mid = L + Math.floor((R-L)/2)

    if(k_works(mid)) {
      R = mid
    }
    else {
      L = mid+1
    }
  }

  return L
};