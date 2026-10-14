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

function goodNodes(root: TreeNode | null): number {
  let count = 0

  const dfs = (node, carry) => {
    if(!node) return

    if(node.val >= root.val && carry <= node.val) count += 1
    
    carry = Math.max(carry, node.val)

    dfs(node.left, carry)
    dfs(node.right, carry)
  }

  dfs(root, root.val)

  return count
};