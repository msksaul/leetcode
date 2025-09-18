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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let lca = root

  const search = (node) => {
    //if(!node) return
    lca = node

    if(node.val==p.val || node.val==q.val) {
      return
    }
    else if(p.val<node.val && q.val<node.val) {
      search(node.left)
    }
    else if(p.val>node.val && q.val>node.val) {
      search(node.right)
    }
    else {
      return
    }
  }

  search(root)
  return lca
};