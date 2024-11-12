function solution(operations) {
  const queue = [];

  operations.forEach((operation) => {
    const [op, num] = operation.split(" ");

    if (op === "I") {
      queue.push(Number(num));
      return;
    }

    if (queue.length === 0) return;

    if (num === "1") {
      const [max, index] = queue.reduce(
        (prev, cur, index) => {
          if (prev[0] < cur) {
            prev[0] = cur;
            prev[1] = index;
          }
          return prev;
        },
        [queue[0], 0]
      );
      queue.splice(index, 1);
    } else {
      const [min, index] = queue.reduce(
        (prev, cur, index) => {
          if (prev[0] > cur) {
            prev[0] = cur;
            prev[1] = index;
          }
          return prev;
        },
        [queue[0], 0]
      );
      queue.splice(index, 1);
    }
  });

  if (queue.length === 0) return [0, 0];

  return queue.reduce(
    (result, cur) => {
      if (result[0] < cur) {
        result[0] = cur;
      } else if (result[1] > cur) {
        result[1] = cur;
      }

      return result;
    },
    [queue[0], queue[0]]
  );
}
