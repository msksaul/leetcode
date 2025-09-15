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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const same = (n1, n2) => {
    if(!n1 && !n2) {
      return true
    }
    else if(!n1&&n2 || n1&&!n2) {
      return false
    }
    else if(n1.val != n2.val) {
      return false
    }
    else {
      return same(n1.left, n2.left) && same(n1.right, n2.right)
    }
  }

  const hasTree = (node) => {
    if(!node) return false

    if(same(node, subRoot)) {
      return true
    }

    return hasTree(node.left) || hasTree(node.right)
  }

  return hasTree(root)
};