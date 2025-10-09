/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
  const n = points.length
  let totalCost = 0
  const visited = new Array(n).fill(false)
  let seen = 0
  const heap = new MinPriorityQueue({ compare: (a,b) => a[0]-b[0]})

  heap.enqueue([0,0])

  while(seen<n) {
    const [cost, point] = heap.dequeue()

    if(visited[point]) continue

    visited[point] = true
    totalCost+=cost
    seen++

    for(let i=0; i<n; i++) {
      if(!visited[i]) {
        const newCost = Math.abs(points[point][0] - points[i][0]) + Math.abs(points[point][1]-points[i][1])
        heap.enqueue([newCost, i])
      }
    }
  }

  return totalCost
};