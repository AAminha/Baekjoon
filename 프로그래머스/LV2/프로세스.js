function solution(priorities, location) {
  let count = 0;
  let current = 0;

  while (true) {
    const topPriority = Math.max(...priorities);
    while (priorities[current] != topPriority) {
      current++;
      current -= current === priorities.length ? priorities.length : 0;
    }

    priorities.splice(current, 1);
    count++;

    if (current === location) return count;

    if (current < location) location--;
    else if (current === priorities.length) current = 0;
  }
}
