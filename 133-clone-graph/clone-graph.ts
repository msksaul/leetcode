/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
  if(!node) return null

  let old_to_new = new Map()
  let stack = [node]
  let visited = new Set()

  visited.add(node)

  while(stack.length>0) {
    let curr = stack.pop()

    old_to_new.set(curr, new Node(curr.val))

    for(const neighbor of curr.neighbors) {
      if(!visited.has(neighbor)) {
        visited.add(neighbor)
        stack.push(neighbor)
      }
    }
  }

  for(const [old_n, new_n] of old_to_new.entries()) {
    for(const neighbor of old_n.neighbors) {
      new_n.neighbors.push(old_to_new.get(neighbor))
    }
  }

  return old_to_new.get(node)
};