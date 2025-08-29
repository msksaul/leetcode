/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let d = new ListNode()
  d.next = head
  let ahead = d
  let behind = d

  for(let i=0; i<n+1; i++) {
    ahead = ahead.next
  }

  while(ahead) {
    behind = behind.next
    ahead = ahead.next
  }

  behind.next = behind.next.next

  return d.next
};