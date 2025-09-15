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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  let has_sum = (node, curr_sum) => {
    if(!node) return false
    curr_sum += node.val

    if(!node.left && !node.right) {
      return curr_sum == targetSum
    }

    return has_sum(node.left, curr_sum) || has_sum(node.right, curr_sum)
  }

  return has_sum(root, 0)
};