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

function isBalanced(root: TreeNode | null): boolean {
  let balanced = true

  const height = (root: TreeNode): number => {
    if(!root) return 0

    let left = height(root.left)
    if(balanced==false) return
    let right = height(root.right)

    if(Math.abs(left-right)>1) {
      balanced = false
      return
    }

    return 1 + Math.max(left, right)
  }

  height(root)

  return balanced
};