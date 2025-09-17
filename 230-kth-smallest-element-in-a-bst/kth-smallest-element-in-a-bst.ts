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

function kthSmallest(root: TreeNode | null, k: number): number {
  let count = k
  let ans = 0

  const dfs = (node) => {
    if(!node) return

    dfs(node.left)

    if(count==1) ans = node.val

    count--

    if(count>0) dfs(node.right)
  }

  dfs(root)
  return ans
};