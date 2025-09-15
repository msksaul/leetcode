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

function isSymmetric(root: TreeNode | null): boolean {
  let same = (n1, n2) => {
    if(!n1 && !n2) {
      return true
    }
    else if(!n1 || !n2) {
      return false
    }
    else if(n1.val != n2.val) {
      return false
    }
    else {
      return same(n1.left, n2.right) && same(n1.right, n2.left)
    }
  }

  return same(root, root)
};