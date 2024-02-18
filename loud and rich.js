var loudAndRich = function(richer, quiet) {
  const list = [];
  const output = [];
  const memo = {};

  richer.forEach(([u,v]) => !list[v] ? list[v] = [u] : list[v].push(u));

  for (let i = 0; i < quiet.length; i++) {
    output.push(dfs(i));
  }

  return output;
  
  function dfs(node) {
    if (node in memo) return memo[node];
    if (!list[node]) {
      memo[node] = node;
      return node;
    }
    let quiestNode = node;
    let quiestLevel = quiet[node];

    for (const next of list[node]) {
      const result = dfs(next);
      if (quiet[result] < quiestLevel) {
        quiestNode = result;
        quiestLevel = quiet[result];
      }
    }

    memo[node] = quiestNode;
    return memo[node];  
  }
};
