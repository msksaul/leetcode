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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const same = (p, q) => {
    if(!p && !q) {
      return true
    }
    else if(p&&!q || !p&&q) {
      return false
    }
    else if(p.val!=q.val) {
      return false
    }
    else {
      return same(p.left, q.left) && same(p.right, q.right)
    }
  }

  return same(p, q)
};