function solution(clothes) {
  let result = 0;
  const closet = {};
  clothes.forEach((item) => {
    closet[item[1]] = closet[item[1]] || [];
    closet[item[1]].push(item[0]);
  });
  const count = Object.keys(closet).map((type) => closet[type].length);

  function dfs(index, accumulate) {
    result += accumulate;
    for (let i = index + 1; i < count.length; i++) {
      dfs(i, accumulate * count[i]);
    }
  }

  for (let i = 0; i < count.length; i++) {
    dfs(i, count[i]);
  }

  return result;
}
