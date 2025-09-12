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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let longestD = 0

  const height = (node: TreeNode): number => {
    if(!node) return 0

    const leftH = height(node.left)
    const rightH = height(node.right)

    const diameter = leftH + rightH
    longestD = Math.max(longestD, diameter)

    return 1 + Math.max(leftH, rightH)
  }

  height(root)

  return longestD
};