function solution(plans) {
  const stack = [];
  const result = [];

  plans.sort((a, b) => a[1].localeCompare(b[1]));
  plans = plans.map((plan) => {
    const [hour, min] = plan[1].split(':').map(Number);
    const time = hour * 60 + min;
    const playtime = Number(plan[2]);
    return [plan[0], time, playtime];
  });

  for (let i = 0; i < plans.length - 1; i++) {
    const [name, start, playtime] = plans[i];
    const nextStart = plans[i + 1][1];
    let endtime = start + playtime;

    // 과제 다하면 끝
    if (endtime === nextStart) {
      result.push(name);
      continue;
    }

    // 다른 거 할 시간 있음
    if (endtime < nextStart) {
      result.push(name);
      while (stack.length > 0 && endtime < nextStart) {
        const last = stack.pop();
        endtime += last[1];

        if (endtime <= nextStart) {
          result.push(last[0]);
        } else {
          stack.push([last[0], endtime - nextStart]);
        }
      }
      continue;
    }

    // 시간 부족
    stack.push([name, endtime - nextStart]);
  }

  result.push(plans[plans.length - 1][0]);
  while (stack.length > 0) {
    result.push(stack.pop()[0]);
  }

  return result;
}
