function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  if(source==destination) return true

  let graph = new Map()

  for(const [u,v] of edges) {
    if (!graph.has(u)) graph.set(u, []);
    if (!graph.has(v)) graph.set(v, []);
    graph.get(u).push(v);
    graph.get(v).push(u);
  }

  let seen = new Set()

  seen.add(source)

  const dfs = (node) => {
    if(node==destination) return true

    for(const neighbor of graph.get(node)) {
      if(!seen.has(neighbor)) {
        seen.add(neighbor)
        if(dfs(neighbor)) return true
      }
    }

    return false
  }

  return dfs(source)
};