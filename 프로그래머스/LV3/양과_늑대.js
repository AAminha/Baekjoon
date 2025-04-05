function solution(info, edges) {
  const trees = {};
  let result = 0;
  edges.forEach(([parent, child]) => {
    if (!trees[parent]) trees[parent] = [];
    if (!trees[child]) trees[child] = [];
    trees[parent].push(child);
  });

  function dfs(currentNode, nextNodes, sheep, wolf) {
    if (info[currentNode] === 0) {
      sheep++;
    } else {
      wolf++;
    }

    if (sheep === wolf) return;

    const newNextNodes = [
      ...nextNodes.filter((node) => currentNode !== node),
      ...trees[currentNode],
    ];
    result = Math.max(result, sheep);

    for (let i = 0; i < newNextNodes.length; i++) {
      dfs(newNextNodes[i], newNextNodes, sheep, wolf);
    }
  }

  dfs(0, [0], 0, 0);

  return result;
}
