/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let heap = new MinPriorityQueue({ compare: (a, b) => a.val - b.val })

  for(const node of lists) {
    if(node) {
      heap.enqueue(node)
    }
  }

  let d = new ListNode(0)
  let curr = d

  while(heap.size()>0) {
    let node = heap.dequeue()

    curr.next = node
    curr = node

    if(node.next) {
      heap.enqueue(node.next)
    }
  }

  return d.next
};