/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  if(!root) return []

  let ans = []
  let queue = []
  queue.push(root)

  while(queue.length > 0) {
    let level = []
    const n = queue.length
    for(let i=0; i<n; i++) {
      const node = queue.shift()
      level.push(node.val)

      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }

    ans.push(level)
  }

  return ans
};