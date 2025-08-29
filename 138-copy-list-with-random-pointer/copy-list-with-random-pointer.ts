/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
  if(!head) return null
  let curr = head
  let old_new = new Map()

  while(curr) {
    old_new.set(curr, new _Node(curr.val))
    curr = curr.next
  }

  curr = head

  while(curr) {
    let new_node = old_new.get(curr)
    new_node.next = old_new.get(curr.next) || null
    new_node.random = old_new.get(curr.random) || null
    curr = curr.next
  }

  return old_new.get(head)
};