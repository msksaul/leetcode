function merge(intervals: number[][]): number[][] {
  intervals = intervals.sort((a,b) => a[0]-b[0])
  let merged = []

  for(const interval of intervals) {
    if(merged.length<1 || merged[merged.length-1][1]<interval[0]) {
      merged.push(interval)
    }
    else {
      merged[merged.length-1] = [merged[merged.length-1][0], Math.max(merged[merged.length-1][1], interval[1])]
    }
  }

  return merged
};