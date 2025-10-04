function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  let graph = new Map()

  for(const [a,b] of prerequisites) {
    if (!graph.has(a)) {
        graph.set(a, []);
    }
    graph.get(a).push(b);
  }

  const unvisited = 0
  const visiting = 1
  const visited = 2

  let states = new Array(numCourses).fill(unvisited)

  const dfs = (node) => {
    if(states[node]==visited) return true
    if(states[node]==visiting) return false

    states[node] = visiting

    if(graph.has(node)) {
      for(const neighbor of graph.get(node)) {
        if(!dfs(neighbor)) return false
      }
    }

    states[node] = visited
    return true
  }

  for(let i=0; i<numCourses; i++) {
    if(!dfs(i)) return false
  }

  return true
};