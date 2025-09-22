/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let heap = new MinPriorityQueue()

  for(const num of nums) {
    if(heap.size()<k) {
      heap.enqueue(num)
    }
    else {
      heap.enqueue(num)
      heap.dequeue()
    }
  }

  return heap.front()
};