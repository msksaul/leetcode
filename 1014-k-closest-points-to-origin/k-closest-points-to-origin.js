/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  const d = (x, y) => x*x + y*y

  let heap = new MaxPriorityQueue({compare: (a, b) => a[0] - b[0]})

  for(const [x, y] of points) {
    console.log(d(x,y))
    if(heap.size()<k) {
      heap.enqueue([d(x,y),[x,y]])
    }
    else {
      heap.enqueue([d(x,y),[x,y]])
      console.log(heap.dequeue())
    }
  }

  let ans = []
  for(const [d,p] of heap) {
    ans.push(p)
  }

  return ans
};