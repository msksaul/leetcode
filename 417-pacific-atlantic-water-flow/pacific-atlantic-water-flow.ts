function pacificAtlantic(heights: number[][]): number[][] {
  const m = heights.length;
  const n = heights[0].length;

  const p_que: number[][] = [];
  const a_que: number[][] = [];
  const p_seen = new Set<string>();
  const a_seen = new Set<string>();

  const key = (i: number, j: number) => `${i},${j}`;

  for (let i = 0; i < m; i++) {
    p_que.push([i, 0]);
    p_seen.add(key(i, 0));
    a_que.push([i, n - 1]);
    a_seen.add(key(i, n - 1));
  }

  for (let j = 0; j < n; j++) {
    p_que.push([0, j]);
    p_seen.add(key(0, j));
    a_que.push([m - 1, j]);
    a_seen.add(key(m - 1, j));
  }

  const get_coords = (que: number[][], seen: Set<string>) => {
    while (que.length > 0) {
      const [i, j] = que.shift()!;
      for (const [di, dj] of [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ]) {
        const r = i + di;
        const c = j + dj;
        const k = key(r, c);
        if (
          r >= 0 &&
          r < m &&
          c >= 0 &&
          c < n &&
          heights[r][c] >= heights[i][j] &&
          !seen.has(k)
        ) {
          seen.add(k);
          que.push([r, c]);
        }
      }
    }
  };

  get_coords(p_que, p_seen);
  get_coords(a_que, a_seen);

  const res: number[][] = [];
  for (const k of p_seen) {
    if (a_seen.has(k)) {
      const [i, j] = k.split(",").map(Number);
      res.push([i, j]);
    }
  }

  return res;
}