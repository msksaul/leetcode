/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  const heap = new MaxPriorityQueue()

  for(const s of stones) heap.enqueue(s)

  while(heap.size() > 1) {
    let diff = heap.dequeue() - heap.dequeue()

    if(diff > 0) heap.enqueue(diff)
  }

  return heap.size() == 0 ? 0 : heap.front()
};