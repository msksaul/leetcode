/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
  const graph = new Map()

  for(const [u, v, time] of times) {
    if(!graph.has(u)) graph.set(u, [])
    graph.get(u).push([v, time])
  }

  const heap = new MinPriorityQueue({compare: (a,b) => a[1] - b[1]})
  heap.enqueue([k, 0])
  const min_times = new Map()

  while(!heap.isEmpty()) {
    const [node, curr_time] = heap.dequeue()

    if(min_times.has(node)) continue
    min_times.set(node, curr_time)

    if(graph.has(node)) {
      for(const [neighbor, time] of graph.get(node)) {
        if(!min_times.has(neighbor)) {
          heap.enqueue([neighbor, curr_time + time])
        }
      }
    }
  }

  return min_times.size === n ? Math.max(...min_times.values()) : -1
};