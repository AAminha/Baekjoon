function solution(orders, course) {
  const result = [];

  for (let i = 0; i < course.length; i++) {
    const menuList = findCompleteMenu(orders, course[i]);
    result.push(...menuList);
  }

  return result.sort();
}

function findCompleteMenu(orders, count) {
  const menuObj = {};

  function makeMenu(order, targetCount, currentMenu, currentIndex) {
    if (currentMenu.length === targetCount) {
      const complete = [...currentMenu].sort().join('');
      menuObj[complete] = (menuObj[complete] || 0) + 1;
      return;
    }

    for (let i = currentIndex + 1; i < order.length; i++) {
      currentMenu.push(order[i]);
      makeMenu(order, targetCount, currentMenu, i);
      currentMenu.pop();
    }
  }

  for (let i = 0; i < orders.length; i++) {
    if (orders[i].length >= count) {
      makeMenu(orders[i], count, [], -1);
    }
  }

  return Object.keys(menuObj).reduce(
    (acc, cur) => {
      if (acc[0] < menuObj[cur]) {
        acc[0] = menuObj[cur];
        acc[1] = [cur];
      } else if (acc[0] === menuObj[cur]) {
        acc[1].push(cur);
      }

      return acc;
    },
    [2, []]
  )[1];
}
s;
