function solution(numbers, hand) {
  const leftLine = [1, 4, 7];
  const rightLine = [3, 6, 9];
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  let left = "*";
  let right = "#";
  const result = [];

  function calDistance(target, current) {
    return (
      Math.abs(keypad[target][0] - keypad[current][0]) +
      Math.abs(keypad[target][1] - keypad[current][1])
    );
  }

  for (const target of numbers) {
    if (leftLine.includes(target)) {
      result.push("L");
      left = target;
      continue;
    } else if (rightLine.includes(target)) {
      result.push("R");
      right = target;
      continue;
    }

    const leftDistance = calDistance(target, left);
    const rightDistance = calDistance(target, right);

    if (leftDistance < rightDistance) {
      result.push("L");
      left = target;
      continue;
    } else if (leftDistance > rightDistance) {
      result.push("R");
      right = target;
      continue;
    }

    if (hand === "right") {
      result.push("R");
      right = target;
    } else {
      result.push("L");
      left = target;
    }
  }
  return result.join("");
}
